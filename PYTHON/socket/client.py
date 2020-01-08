# REFERENCE : https://lidron.tistory.com/44

import socket
from threading import Thread
HOST = "127.0.0.1"
PORT = 8888


def run_chatting():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.connect((HOST, PORT))
        thread = Thread(target=receive_message, args=(sock,))
        thread.daemon = True
        thread.start()

        while True:
            message = input()
            sock.send(message.encode())
            if message == '/quit':
                break


def receive_message(sock):
    while True:
        try:
            data = sock.recv(1024)
            if not data:
                break
            print(data.decode())
        except Exception as e:
            pass


if __name__ == "__main__":
    run_chatting()