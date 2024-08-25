# Games and Adversarial Search

In these types of problems, there are multiple agents with conflicting goals. Examples include most games.

## Environment
For an adversarial search, the environment is
- multiagent (so there can be adversaries)
- competitive (so the adversaries have conflicting interests)
- zero-sum (so a benefit to one is necessarily a determent to the other)
- turn-based (so players alternate, required for adversarial search)
- perfect information (so both players see everything)

## Game Playing
The game state can be represented by a state tree, as done for search algorithms. However, the edges alternate between players (since it is turn-based).

Methods of playing:
- analysis of features
- if/then rules
- brute force
- look ahead and evaluate

## Minimax
Search tree with alternating layers for a maximizer and minimizer. Evaluates how good each end result is using a heuristic function. Then, it uses DFS and records what the result would be at each node if both players play optimally.

Issues:
- expensive (since it computes $b^d$ leaf nodes)
- wastes computational power on impossible subtrees

## $\alpha\beta$ Pruning
Similar to Minimax, except if a branch will not possibly be traversed (for instance, if the minimizer has an option that is worse than another subtree, the maximizer will never pick that), it will be pruned.

The state space itself can also be pruned as it is generated, saving more computational power.

Efficiency gain: optimal case of $S=2b^{d/2}$ (average is close to this, too)

## Heuristic $\alpha\beta$ Pruning
Uses an evaluation function instead of utilities. Particularly useful when expanding the entire search tree is unfeasible.
