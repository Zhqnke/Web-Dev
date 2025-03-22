x = int(input())
while x%10==0 :
    x //= 10 ; 
s = str(x)

print(s[::-1])