# Search

## Search Vocabulary

- Node: state configuration
- Edge: actions of moving the boat
- Weights: cost of actions
- Successor/Transition function: sets of edges and weights between them
- Path: sequence of actions
- Solution: path from start to end node

## Applications of Search

Many issues can be reduced to search problems.

### Missionaries and Cannibals

Problem: crossing a river with missionaries and cannibals, where the missionaries are eaten if there are more cannibals.

- State space: Each possible combination of missionaries and cannibals
- Start and end: all on the left bank, all on the right bank
- Successor function: set of valid moves with boat

### Route Planning

- State space: T stations and connections
- Start and end: origin and destination stations
- Successor function: set of edges and weights

### Maze Solving

- State space: intersections and connections
- Start and end: start and goal spaces
- Successor function: where you can go from the current location

### 8-Puzzle

- State space: configuration of the board
- Start and end: random configuration, solved board
- Successor function: possible actions

### Chess

- State space: board configuration (about $10^{120}$ states!)
- Start and end: starting configuration, checkmate
- Successor function: possible valid moves

## Breadth-First Search (BFS)

Starting from the root node, explore all the neighbors. If the goal was not found, explore the neighbor's neighbors, and so on.

BFS will always find a path if it exists and always finds the shortest path. This is because it explores all nodes of a distance $d$ away from the root before searching for nodes a distance of $d+1$ away.

## Depth-First Search (DFS)

Starting from the root node, explore completely one branch until a leaf node is reached. When this occurs, take the other path at the last intersection with unexplored children.

DFS will always find a path if it exists, but it will not always find the shortest path (assuming there are cycles).

## Iterative Deepening Search (IDS)

Perform DFS with a limited depth of $1$, then start over with a depth of $2$, and so on, until either the goal is found or there are no more nodes. IDS saves on memory but costs some extra time since DFS has to restart. However, it is not pointless, as DFS is fast.
