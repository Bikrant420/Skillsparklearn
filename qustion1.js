 
import re=[abc,cba]{

def isPalindrome(s):
    # Convert the string to lowercase
    s = s.lower()
    
    # Remove non-alphanumeric characters using regular expression
    s = re.sub(r'[^a-z0-9]', '', s)
    
    # Check if the cleaned string is a palindrome
    return s == s[::-1]
}
# Example usage:
print(isPalindrome("A man, a plan, a canal, Panama"))  # Output: True
print(isPalindrome("Hello, World!"))  # Output: False
