class Stack:
    def __init__(self):
        self.stack = []

    def is_empty(self):
        if len(self.stack) == 0:
            print("Stack is empty")
            return True
        return False

    def push(self, data):
        self.stack.append(data)

    def pop(self):
        if self.is_empty():
            return None
        return self.stack.pop()

    def peek(self):
        if self.is_empty():
            return None
        return self.stack[-1]

if __name__ == "__main__":
    stack = Stack()
    print(stack.stack)

    stack.peek()
    stack.pop()

    print("push")
    for i in range(1, 5):
        stack.push(i)
        print(stack.stack)

    print("peek")
    stack.peek()
    print(stack.stack)

    print("pop")
    for i in range(1, 10):
        stack.pop()
        print(stack.stack)