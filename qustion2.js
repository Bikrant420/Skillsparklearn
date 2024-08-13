def fibonacci(n):
    # Handle special cases
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    
    # Initialize the list with the first two Fibonacci numbers
    fib_sequence = [0, 1]
    
    # Generate the Fibonacci sequence up to n numbers
    while len(fib_sequence) < n:
        next_fib = fib_sequence[-1] + fib_sequence[-2]
        fib_sequence.append(next_fib)
    
    return fib_sequence

# Example usage:
print(fibonacci(0))  # Output: []
print(fibonacci(1))  # Output: [0]
print(fibonacci(5))  # Output: [0, 1, 1, 2, 3]
print(fibonacci(10)) # Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
