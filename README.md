# useStateObject hook

[![Build Status](https://travis-ci.org/quangdng/useStateObject.svg?branch=master)](https://travis-ci.org/quangdng/useStateObject)
[![codecov](https://codecov.io/gh/quangdng/useStateObject/branch/master/graph/badge.svg)](https://codecov.io/gh/quangdng/useStateObject)
![npm](https://img.shields.io/npm/v/use-state-object?style=flat-square)

A React functional component hook to mimic Class component object state management.

## Examples:

State declaration:

```javascript
const [state, setState] = useStateObject({
  isLoading: false,
  isError: false
});
```

Usage:

```javascript
// State will be merged with the object you provide to setState instead of being replaced
setState({
  isLoading: true
});

// State is now
// {
//    isLoading: true,
//    isError: false
// }
```
