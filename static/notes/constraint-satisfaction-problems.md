# Constraint Satisfaction Problems

## Overview

Constraint satisfaction problems are a subset of search problems. The goal is to find values for some set of variables, but in accordance to some constraint. This can either be discrete variables or continuous variables.

There are three components:

- Variables: $X=\{x_1,x_2,...,x_n\}$
- Domains: $D=\{D_1,D_2,...,D_n\}$
- Constraints: $C=\{C_1,C_2,...,C_k\}$

### Constraints

A constraint $C_i\in C$ has a scope $\subseteq X$ and permitted values.

### Assignments and Solutions

An assignment is a mapping of values to variables. These can be complete (if every variable is included) or partial (if some variables are not included).

If the assignment satisfies all the constraints, it is a consistent/legal assignment (this does not need to be complete).

A solution is a consistent and complete assignment.

### Constraints

A unary constraint concerns one variable. For instance, $x\leq 5$.

A binary constraint involves two variables, like $x<y$ or $x+y<10$.

## Example: Sudoku

Each row, column, and sub-grid needs the numbers 1-9.

As a CSP:

- Variables: $X=\{x_{11},x_{12},...,x_{99}\}$
- Domain: $D=\{x_{ij}\in\{1,2,...,9\}~\forall i,j\}$
- Constraints:
  - $x_{ij}\neq x_{ik}~\forall j\neq k$
  - $x_{ij}\neq x_{kj}~\forall i\neq k$
  - $x_{ij}\neq x_{kl}~\forall (i,j)\neq (k,l),\{x_{ij},x_{kl}\in S_n\}$ where $S_n$ is sub-grid $n$

## Example: $n$-Queens

As a CSP:

- Variables: $X=\{x_1,x_2,...x_8\}$
- Domain: $D=\{x_{i}\in\{1,2,...,8\}~\forall i\}$
- Constraints:
  - $x_i\neq x_j~\forall i,j$
  - $|x_i-x_j|\neq |i-j|~\forall i,j$

## Example: Map Coloring

Color a planar graph with 4 colors (this is always possible). By brute force, there would be $4^{48}$ possible coloring options.

Using DFS/BFS, start with one node and pick the first available color. Continue to the next node and pick the next available color. Keep going until the entire graph is colored.

Better options include visiting the minimum remaining values, the least constraining value, look ahead, etc.15`
