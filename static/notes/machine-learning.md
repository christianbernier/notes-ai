# Machine Learning

## Categorization

### Supervised vs unsupervised
Supervised machine learning is when there is a labeled dataset for learning, whereas unsupervised learning does not.

## Gradient Descent

### Example: linear regression
When fitting a line to a set of points, we are trying to minimize the R-square value:

$$
L(m,c,X)=\underset{x,y\in X}{\sum}\left(mx+c-y\right)^2
$$

We can adjust the values of $m$ and $c$ as

$$
m=m-\alpha\nabla_mL
$$
$$
c=c-\alpha\nabla_cL
$$

where $\alpha$ is the learning rate (or step size).

### Stochastic Gradient Descent
Similar to Q-learning, stochastic gradient descent utilizes the changes to the approximations as it progresses through the dataset, leading to a faster convergence.

## Classification
For some data point $x$, we say $\phi(x)$ is a vector with some number of dimensions which describe the data.

Trying to separate terms with a line in standard form $Ax+By+C=0$, for a vector $w=[A,B]$, the line it describes (assuming $C=0$) will be perpendicular. Any data point above the line will give a positive dot product with $w$.

In this case, the loss function would be

$$
L(w,x)=\begin{cases}
  1\hspace{10pt}\text{if}\hspace{6pt}y\cdot\text{sign}(w\cdot\phi(x))=-1\\
  0\hspace{10pt}\text{otherwise}
\end{cases}
$$

The goal is to minimize the number of points misclassified and maximize the margin around the line that divides the data.

### Introducing an intercept term
Since the decision boundary will not always pass through the origin, we add an intercept term $b$, called the bias term. Now we have $w$ to define the slope and $b$ to define the intercept.

Now, our loss function can be represented as:

$$
L(w,x)=\begin{cases}
  1\hspace{10pt}\text{if}\hspace{6pt}y\left(w\cdot\phi(x)+b\right)\geq 1\\
  0\hspace{10pt}\text{otherwise}
\end{cases}
$$

The 1 comes from the margin around the decision boundary, which incentivizes space between points and the line.

The width of the margin depends on the two points used, and can be expressed as

$$
\frac{(v_+-v_-)\cdot w}{||w||}=\frac{2}{||w||}
$$

Now the goals (maximizing the margin and minimizing the classification error) can be expressed as:

$$
\min ||w||^2\hspace{10pt}\text{and}\hspace{10pt}\min\underset{x\in X}{\sum}\max\left(1-y\left[w\cdot x+b\right],0\right)
$$

Therefore, the overall objective is to minimize the value of

$$
||w||^2+\underset{x\in X}{\sum}\max\left(1-y\left[w\cdot x+b\right],0\right)
$$

There is an inherent trade-off between a wide margin and minimal classification errors, since there could be outliers. To control this relation between the two objectives, we add a constant to the classification term:

$$
||w||^2+\lambda\underset{x\in X}{\sum}\max\left(1-y\left[w\cdot x+b\right],0\right)
$$

## Feature Transforms

For data that cannot be separated by a single linear separator, applying a transformation allows linear classification.

An example would be data in a 1D space. Mapping onto a parabola allows for a linear separator to classify a data class originally surrounded by another type of data.

One downside to this approach is choosing the correct function. For scattered data in multidimensional space, it would be impractical to choose a transform to use linear classification.

## Quantifying Confidence using the Sigma Function

To determine the confidence of a given classification, we can imagine mapping the distance to the separator onto a sigmoid function. The distance would be $(w\cdot x+b)$ and a sigmoid function is given by:

$$
\sigma(x)=\frac{1}{1+e^{-x}}
$$

We can also use the sigmoid function and gradient descent to determine the correct boundary to classify data (called a logistic regression). The loss function in this case (called binary cross entropy) would be

$$
L=-\frac{1}{N}\underset{i}{\sum}~y_i\log~\sigma(w\cdot x+b)+(1-y_i)\log\left(1-\sigma(w\cdot x+b)\right)
$$

For each data point, this collapses into either quantifying how correct the classification is or how incorrect it is. The log ensures the loss goes to 0 as the confidence goes to 1.

Finding the gradient of $\max\left(1-y(w\cdot x+b),0\right)$, we find

$$
\nabla_wL=-\mathbb{1}\left[1-y(w\cdot x+b)>0\right]yx
$$

where $\mathbb{1}[\text{condition}]$ is the indicator function, defined as

$$
\mathbb{1}[\text{condition}]=\begin{cases}
  1 \hspace{10pt}\text{if condition is true}\\
  0 \hspace{10pt}\text{otherwise}
\end{cases}
$$
