The problem of the exercise
===========================

the kata was using the same array pop outside the function in random tests
so that the solution arr.pop() never work there since the pop function was
being executed one more time.