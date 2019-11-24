import time
import sys
from pynput.keyboard import Key, Controller

keyboard = Controller()

def search(radius):
    keyboard.press('w')
    time.sleep(radius)
    keyboard.release('w')

    keyboard.press('a')
    time.sleep(radius)
    keyboard.release('a')

    keyboard.press('s')
    time.sleep(radius)
    keyboard.release('s')

    keyboard.press('d')
    time.sleep(radius)
    keyboard.release('d')

    search(radius)

if sys.argv[1] == 'search':
    print('Searching within a '+sys.argv[2]+'m radius...')
    search(float(sys.argv[2]))
