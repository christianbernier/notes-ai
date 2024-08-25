# Local Search

## Overview
- Search through neighboring configurations for an improvement to an objective function
- Only keep track of a single search state (no history)

## Hill Climbing
- Start at a random state
- Move to a neighboring configuration that improves the objective function
- Discard a step that results in a worse configuration

### $n$-Queens
- Start with random configuration of one queen in each column and row
- Swap queens' rows, keeping track of number of diagonal conflicts

### Linear regression
- Start with a horizontal line
- Adjust slope and $y$-intercept until the $R^2$ value is minimized

### Travelling Salesman
- Start with a random configuration (list of nodes to traverse)
- Swap pairs of nodes if it results in a beneficial configuration

## Pros and Cons of Local Search

### Pros:
- Constant space
- Can easily be tweaked with new data

### Cons:
- Can get stuck in local optima (where all neighbors look worse)
- Can get stuck in plateaus (where all neighbors look the same)

## Local Optima
Methods to get out of local optima:
- Make a large change when small changes stop working
- Allow some sequence of bad steps once in a while (but keep a copy of the best solution)
- Restart the search (either from another initial condition or the last best search)

## Simulated Annealing
Idea comes from metal: as metal cools, it becomes harder for molecules to move around as the temperature decreases, resolving internal stresses gradually.

Allow moving to a worse state with a small probability, but have this probability decrease as the process continues.

1. Initialize a temperature $T$ and a decay multiplier $d$
2. Allow moving to a worse state with probability $e^{{e(n)-e(n^\prime)}/{T}}$ where the $e$ in the exponent is the energy function (objective function to minimize)
3. Probability decays exponentially as the process continues

## Local Beam Search
Similar to regular beam search, except keep the best $k$ options across all explored branches. This is essentially running $k$ searches in parallel, but the searches can communicate with one another.

## Genetic Algorithms
Just like evolution in biology, keeps the best configurations and combines them with random mutations to achieve a better solution.

- Fitness: the objective function to maximize
- Mutation: changing to a neighboring solution at random
- Crossover: combining two configurations to produce a new configuration with some parts of each parent
