# Deep Learning

## Deep Neural Networks

A neural network is "deep" if it has more than one hidden layer. Deep neural networks (DNNs) are used as feature extractors. Each layer detects something more complex than the previous layer. For instance, one layer can detect edges, then certain curves, then eventually entire images.

### Convolutional Neural Networks

With standard image flattening, all the spacial information is lost (which pixels are neighbors, etc.). This can be improved by using a kernel, which scans the image one pixel at a time (called a convolution operation). Using such a method provides information about the neighborhood of each pixel.

Convolution layers can be stacked to extract more complex structures in the image. An example of layers in a convolutional neural network (CNN) is:

- input
- convolution + ReLU
- pooling
- convolution + ReLU
- pooling
- ...
- flatten
- fully connected
- softmax

Overfitting data can result in incorrect classification if the CNN learns particular patterns of pixels in the training data.

### Transfer learning

Since training a CNN from scratch can take a long time, one can take the feature extraction weights from a different model, modify the final classification layers, and achieve a trained model much faster.

## Downscaling Images

With convolutions producing many images, we can downscale images to reduce the amount of memory needed.

### Max pooling operation

Using a matrix that scans across the image and takes the maximum pixel value of each step, the image can be downscaled.

## Deep Q Networks

### Approximating Q values

For systems where there are a lot of input states, a neural network can be used to approximate Q values for a given state. Providing a state $S$ to the neural network will have output values $Q_\pi(S,a_1)$, $Q_\pi(S,a_2)$, $\ldots$

### Training the model

Instead of having one model, we have two copies: the target DNN and policy DNN. This allows using the target network for backpropagation in the policy network. Then, we can copy the policy network to the target network every once in a while.

For a loss function, we can take the squared difference between the target and predicted values.

### Limitations

DQNs are only well-suited for discrete action spaces (they cannot do continuous actions). Additionally, they cannot model stochastic policies.

### Policy Gradient Methods

To achieve a stochastic policy, we can directly optimize the policy, outputting the probabilities of taking each action given the input state.

For a continuous action space, we can have the neural network output parameters for a certain distribution (ex. mean, variance, etc.).

We can use the following loss function given the policy action probabilities:

$$
L=-\log P(a_t|s_t) R_t
$$
