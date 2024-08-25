<script lang="ts">
  export let data;
</script>

<div id="content">
  <a href="/">Go home</a>
  {@html data.html}
</div>

<style>
  #content {
    width: min(80ch, 90%);
    margin: 0 auto;
    padding: 50px 0 100px 0;
  }

  a {
    font-size: 0.8rem;
    text-decoration: none;
    font-family: var(--font-mono);
    padding: 3px 8px;
    border-radius: 12px;
    outline: none;
    border-style: solid;
    color: var(--color-light);
    background-color: #1d3539;
    border-color: #325b62;
  }

  a:hover, a:focus-visible {
    background-color: #1c444a;
  }
</style>
