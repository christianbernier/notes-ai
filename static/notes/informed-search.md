# Informed Search

## Uniform Cost Search (UCS)
Also known as Dijkstra's algorithm, UCS is similar to BFS except instead of maintaining a constant depth as it explores new nodes, it explores the next cheapest edge, keeping a (roughly) constant cost across its frontier. To achieve this, it is simply BFS but instead of a queue, it uses a priority queue where the priority is based on cost.

## Heuristic Functions
- Estimate how good the next state is
- Admissible: never overestimate the cost to the goal
- Consistent: $\forall~\text{node}~n,~\text{successor}~n^\prime\implies h(n)\leq c(n\rightarrow n^\prime)+h(n^\prime)$

### Example: Manhattan Distance
$h(n,n^\prime)=\left|x_{n^\prime}-x_n\right|+\left|y_{n^\prime}-y_n\right|$

Admissible? Yes

Consistent? Yes

## Greedy Best First Search (GBFS)
- Explore the neighbor with the best heuristic
- Same as Uniform Cost Search, except $h(w,\text{goal})$ in the priority queue instead of the cost and weight

## $A^*$ Search
- Use the heuristic and cost to explore the closest node
- Always finds the shortest path with a consistent heuristic function
- Push $[\text{cost so far}]+[\text{weight of next edge}]+[\text{heuristic of next edge}]$ to priority queue

## Beam Search
- Only explore $k$ best nodes
- Incomplete and suboptimal search
