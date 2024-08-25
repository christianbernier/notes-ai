# Reinforcement Learning

## Mordor Example

There is a 4x4 grid of positions. A policy for this MDP is an action for each of the 16 positions on the grid (ex. in state 0, move up). There is a small probability the action does not work, and a different action is taken.

## Key Idea

With reinforcement learning, the idea is to learn from trial and error rather than a known reward structure. Instead of knowing where the rewards are, the agent has to figure that out.

The agent interacts with the environment (mostly unknown, but action space must be known) then receives a new state and its reward.

### Utility

An episode is the agent getting from the start state to the end state once. Its utility is the sum of discounted rewards it gained during that episode:

$$
U_t=r_1+\gamma r_2+\gamma^2 r_3+\ldots
$$

To find

$$
Q_\pi\left(s,a\right)=\text{avg}(U_t)
$$

look at the first time the agent played action $a$ in each episode and average the actual utility values from that point on.

To keep track of a running average for $Q_\pi(s,a)$, we can keep track of the number of updates to the estimate:

$$
\eta=\frac{1}{1+\text{\# updates to }Q(s,a)}
$$

then,

$$
Q_\pi(s,a)=(1-\eta)\hat{Q}_\pi(s,a)+\eta u
$$

This allows for an update to $Q_\pi(s,a)$ after each episode where action $a$ was taken.

### Bootstrapping

For each $(s,a,r,s^\prime,a^\prime)$, update $\hat{Q}_\pi (s,a)$ as

$$
\hat{Q}_\pi^{(t)} (s,a)=(1-\eta)\hat{Q}_\pi^{(t-1)} (s,a)+\eta\left[r+\gamma Q_\pi (s^\prime,a^\prime)\right]
$$

This method is called SARSA.

## Q-Learning

Bootstrapping still assumes taking random actions after each action. To utilize the knowledge gained, we can use the optimal policy:

$$
\hat{Q}_\text{opt}^{(t)} (s,a)=(1-\eta)Q_\text{opt}^{(t-1)} (s,a)+\eta\left[r+\gamma~\underset{a^\prime}{\max}~Q_\text{opt}^{(t-1)} (s^\prime,a^\prime)\right]
$$

computed for each $(s,a,r,s^\prime)$. This is helpful because it converges much quicker than standard reinforcement learning, which requires trying a lot of data.

### $\epsilon$-greedy

With probability $\epsilon$, pick a random action. Otherwise, pick the optimal action. As time progresses, $\epsilon$ goes from near 1 to near 0, so the optimal strategy is eventually found.
