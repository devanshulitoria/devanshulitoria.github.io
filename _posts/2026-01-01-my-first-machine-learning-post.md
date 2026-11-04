---
layout: post
title: "My First Machine Learning Post"
date: 2026-01-01
categories: [machine-learning, getting-started]
---

## Why I'm starting this blog

I'm using this space to explain what I learn, share experiments,
and document the decisions behind my machine-learning projects.

## What is machine learning?

Machine learning uses data to fit models that can make predictions
or identify patterns.

For example, a regression model can learn relationships between
house features and prices.

## What I'll write about

- Python for data analysis
- Data cleaning and visualization
- Regression and classification
- Model evaluation
- End-to-end machine-learning projects

## Example Python code

```python
def mean_squared_error(actual, predicted):
    if len(actual) != len(predicted) or not actual:
        raise ValueError("Inputs must have equal, nonzero lengths.")

    return sum(
        (a - p) ** 2
        for a, p in zip(actual, predicted)
    ) / len(actual)
