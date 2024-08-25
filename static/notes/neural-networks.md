# Neural Networks

## Unit Structure

There are a set of input nodes, $x_1,x_2,\ldots,x_n$, corresponding weights $w_1,w_2,\ldots,w_n$, a bias, $b$, and an output node. The output will be

$$
\sigma(w\cdot x+b)
$$

### Hidden Layers

For problems where a linear separator is insufficient, adding neurons in between the input layer and output layer which perform a logistic regression can result in more complex behavior. These have their own biases and combine at the output layer with their own weights.

To label the weights and inputs, we say the input is a column vector:

$$
\left[
  \begin{matrix}
    x_1 \\
    x_2
  \end{matrix}
\right]
$$

and the weights are in a matrix:

$$
\left[
  \begin{matrix}
    w_{11} & w_{21} \\
    w_{12} & w_{22}
  \end{matrix}
\right]
$$

## Loss Function

Given the output layer is defined by

$$
\sigma\left(V\sigma(W\cdot x+b)+k\right)
$$

the loss function will look similar to the binary cross entropy function, but more complicated.

We can then use gradient descent, as

$$
w=w-\alpha\nabla_wL
$$

## Optimizing the Network

### Activation functions

A sigmoid function is good, but far from $x=0$, the gradient is quite small. Instead, another function we can use is a rectified linear unit (ReLU), which is 0 for $x<0$, then a linear function for $x>0$.

### Softmax

If the output layer is meant to be a probability distribution, the nodes should sum to 1. To achieve this, we can use a softmax processing step:

$$
\text{Softmax}=\frac{e^{z_i}}{\underset{j}{\sum}~e^j}
$$

This converts all the outputs into values in the range $[0,1]$ such that all the values sum to 1.

### Cross-Entropy Loss

For a probability distribution, a good loss function would be the cross-entropy loss function:

$$
L=-\underset{c}{\sum}~y_i\log~P(c|x_i)
$$
