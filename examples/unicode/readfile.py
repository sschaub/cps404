# Try executing this program in
#  Windows command prompt
#  Linux
#  VIsual Studio Code

import sys

filename = sys.argv[1]

print('Without specifying encoding:')
with open(filename) as f:
    str = f.read()

print('Length: ', len(str))
print('Contents:', str)
for ch in str:
  print(ch)


print('Specifying encoding:')
with open(filename, encoding='utf-8') as f:
    str = f.read()

print('Length: ', len(str))
for ch in str:
  print(ch)

print('Accessing by position:')
for i in range(len(str)):
  print(i, str[i])