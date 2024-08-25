# Hidden Markov Models

## Sequence Labeling Problems

Some demos include labeling parts of speech and determining categories of nouns, like organizations and people.

### Example: labeling parts of speech

In the sentence "My name is Raj," the words are each an observation and the labels (possessive adjective, noun, auxiliary verb, proper noun) are each a hidden state.

This is a hidden Markov model since transitions go between hidden states.

Each time there is new data, we update the entire sequence, since we have new information.

## Structure of a Hidden Markov Model

There are hidden states (ex. parts of speech) with transitions between each of them. There are also observation states (ex. words) which have edges from the hidden states.

To determine the probability of a given sentence, take the probability each part of speech comes in the order times the probability of each word given that part of speech:

$$
P(\text{PA})\cdot P(\text{"my"}|\text{PA})\cdot P(\text{NN}|\text{PA})\cdot P(\text{"lunch"}|\text{NN})\ldots
$$

One can figure out the probability of any given state by:

$$
\alpha_t(i)=P(o_t|i)\cdot\underset{j}{\sum}\alpha_{t-1}(j)\cdot P(i|j)
$$

## Most Likely Hidden-State Sequence

To find the hidden-state sequence itself, find the path with the maximum probability to determine which of the hidden states is the highest.

Viterbi algorithm provides the most likely path given the observation states. It is essentially the same as the forward algorithm but with a maximum instead of summation.

This can be adjusted to work with multi-word phrases by adding types of speech for "start-of-phrase," "in-phrase," "end-of-phrase," etc.
