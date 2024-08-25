# Adversarial Machine Learning

## Gradient Ascent

Instead of using gradient descent to make a model better, an adversarial network can use gradient ascent to make the classification worse. However, instead of changing the weights and biases, it must change the input itself:

$$
x=x+\alpha\nabla_xL
$$

or just using the sign of the gradient (fast gradient sign method):

$$
x=x+\alpha~\text{sign}(\nabla_xL(f_\theta(x),y))
$$

This can also be clipped to be within the range $[x-\epsilon,x+\epsilon]$, called projected gradient descent.

### Targeted vs untargeted

This method can be made to be targeted by using gradient descent with a false label instead of using gradient ascent with the true label.

### Black-box vs white-box

With a known model (white-box), one can use its loss function to attack the specific training. However, with a hidden model (black-box), one can train another model to achieve the same task and train against that.

### Evasion vs poisoning

Using evasion is changing an image the model has not seen yet to trick it. This is different to poisoning, which trains the model on bad data in specific situations. Therefore, the model works in most situations but fails confidently when it encounters the specific situation again.

### Digital vs physically realizable

For digital attacks, the data itself is changed. A physically realizable attack is something akin to changing the physical object the model uses to trick it into misclassification.
