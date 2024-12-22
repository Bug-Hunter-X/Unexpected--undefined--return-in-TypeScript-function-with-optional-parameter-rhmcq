# Unexpected 'undefined' Return in TypeScript Function with Optional Parameter

This example demonstrates a potential issue in TypeScript functions where an optional parameter that is undefined might cause an unexpected 'undefined' return value, rather than a default value or handled condition.

## The Problem

The `greet` function is designed to accept a string or null parameter.  If null, it returns a default greeting. However, if the parameter is undefined, it throws a runtime error because string interpolation is attempted on undefined.

## Solution

The solution involves explicitly checking for `undefined` and providing a default value or handling the case appropriately.