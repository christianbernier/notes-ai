# Probabilistic Reasoning

## Expectiminimax

Consider a game with two biased coins:

- Coin A: 75% H, 25% T
- Coin B: 40% H, 60% T

Players alternate flipping one of the coins. The maximizer is trying to get two different outcomes, and the minimizer is trying to get two of the same outcomes.

On the game tree, the heuristic function used is whether the outcomes of two coin flips are both the same or different.

Then, the heuristics can be propagated up the tree using the probabilities of each coin flip, since that describes the expected value of each node in the tree.

This is similar to minimax, but now it is expectiminimax because there is probability involved in each branch.

## Markov Models

The Markov assumption in probability is that the current state depends on a finite number of previous states (such as just the previous state).

In a Markov model graph, each node represents a state and there are edges between all combinations of nodes (including self-edges), which represent the probability each origin node results in the destination node in the next step.

This can also be represented by an $N\times N$ transition matrix where $N$ is the number of states.

As the transition matrix is multiplied by itself, the early history does not matter.

Eventually, the matrix approaches a stationary distribution: $\underset{N\rightarrow\infty}{\lim}P^N$. This turns out to be an eigenvector of the matrix.
