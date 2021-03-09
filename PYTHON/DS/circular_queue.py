class CircularQueue:
    def __init__(self, max_size):
        self.queue = [None for i in range(max_size)]
        self.head = 0
        self.tail = 0
        self.cur_size = 0
        self.max_size = max_size

    def is_full(self):
        if self.cur_size == self.max_size - 1:
            return True
        return False

    def is_empty(self):
        if self.cur_size == 0:
            return True
        return False

    def enqueue(self, data):
        if self.is_full():
            print("Queue is full!")
            return False
        self.queue[self.tail] = data
        self.cur_size += 1
        self.tail = (self.tail + 1) % self.max_size
        return True

    def dequeue(self):
        if self.is_empty():
            print("Queue is empty!")
            return None
        data = self.queue[self.head]
        self.queue[self.head] = None
        self.cur_size -= 1
        self.head = (self.head + 1) % self.max_size
        return data


if __name__ == "__main__":
    max_size = 10
    c_queue = CircularQueue(max_size)
    print(c_queue.queue)

    print("deqeue")
    dequeued_data = c_queue.dequeue()
    print(c_queue.queue)

    print("enqeue")
    for i in range(1, max_size + 5):
        if c_queue.enqueue(i):
            print(c_queue.queue)

    print("deqeue again")
    for i in range(3):
        dequeued_data = c_queue.dequeue()
        print(c_queue.queue)

    print("enqeue again")
    for i in range(5):
        if c_queue.enqueue(i):
            print(c_queue.queue)
