import { error } from '@sveltejs/kit';
import { parse } from 'marked';
import { display, math } from 'mathlifier';

export async function load({ fetch, params }) {
	const response = await fetch(`/notes/${params.slug}.md`);

	if (response.status === 404) {
		error(404, 'Not found');
	} else if (!response.ok) {
		error(500, 'Unknown error');
	}

	const content = (await response.text())
		.replaceAll(/\$\$\r?\n(.*?)\r?\n\$\$/gs, (_, match) => display(match))
		.replaceAll(/\$(.*?)\$/g, (_, match) => math(match));

	const html = await parse(content);

	return { html };
}
