# Markov Decision Problems

## Overview

A Markov decision problem (MDP) is a tuple of the following:

- state space, $S$ (set)
- action space, $A$ (set)
- transitions, $T$ ($|S|\times|S|\times|A|$ tensor)
- rewards, $R$ ($|S|\times|S|\times|A|$ tensor)
- decay factor, $\gamma$ ($0<\gamma<1$)

## Utility Functions

A utility function is the total reward from the start state to the end state. For a particular policy, $\pi$, we can use the Bellman equation:

$$
V_\pi(s)=\underset{s^\prime}{\sum}~T(s,a,s^\prime)\left[R(s,a,s^\prime)+\gamma V_\pi(s^\prime)\right]
$$

### Policies

A policy, denoted $\pi$, is a mapping from states to actions which describes which action the agent should take at each state.

### Solving for recurrent relations

The Bellman equation can result in a recurrent relation between variables (if $\gamma=1$). This can be solved using linear algebra or dynamic programming methods.

Another approach is value iteration. Start with all approximate values equal to 0, then apply the Bellman equation with a time step dependence:

$$
V_\pi^{(t)}(s)=\underset{s^\prime}{\sum}~T(s,a,s^\prime)\left[R(s,a,s^\prime)+\gamma V_\pi^{(t-1)}(s^\prime)\right]
$$

## Policy Evaluation

Currently, $\pi$ describes a static policy. We can define a new function, $Q$, which starts with some action $a$ then follows policy $\pi$:

$$
Q_\pi(s,a)
$$

### Optimal strategy

To determine the optimal outcome using the Bellman equation, find which action maximizes the utility function for that step and all subsequent steps (subject to the decay factor):

$$
V_\text{opt}^{(t)}(s)=\underset{a}{\max}\underset{s^\prime}{\sum}~T(s,a,s^\prime)\left[R(s,a,s^\prime)+\gamma V_\text{opt}^{(t-1)}(s^\prime)\right]
$$

To find the corresponding policy, use $\argmax$ instead:

$$
V_\text{opt}^{(t)}(s)=\underset{a}{\argmax}\underset{s^\prime}{\sum}~T(s,a,s^\prime)\left[R(s,a,s^\prime)+\gamma V_\text{opt}^{(t-1)}(s^\prime)\right]
$$

## Partially-Observable MDPs

In a partially-observable environment, an agent can use sensors to determine its location with some probability (depending on the environment and its sensors' failure rate).

The probability of being in any given state can be calculated using:

$$
P(s|o)=\frac{P(o|s)\cdot P(s)}{P(o)}
$$

A belief state is a probability assigned to each state in the environment, based on an observation the agent makes.
