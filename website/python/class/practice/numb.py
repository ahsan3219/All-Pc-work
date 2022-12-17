# num=print("Guess a number")
# guess=print("IS number is greater than 100")
# b=input("True or False")
# if b=="True":
#     guess=print("IS number is greater than 200")
#     b=input("True or False")
#     if b=="True":
#          guess=print("IS number is greater than 500")
#          b=input("True or False")
#          if b=="True":
#              guess=print("IS number is greater than 700")
#              b=input("True or False")
#              if b=="True":
#                  guess=print("IS number is greater than 1000")
#                  b=input("True or False")
#                  c=print("It is exceed my limits")
        
#              elif b=="False":
#                 guess=print("IS number is greater than 800")
#                 b=input("True or False")
#                 if b=="True":

   
   
       
# for a in range(0,100,100):



import random
n = random.randint(1,100)
guess = int(input("Enter an integer from 1 to 100: "))
while n != "guess":
    
    if guess < n:
        print("guess is low")
        guess = int(input("Enter an integer from 1 to 99: "))
    elif guess > n:
        print ("guess is high")
        guess = int(input("Enter an integer from 1 to 99: "))
    else:
        print ("you guessed it!",)
        break
    


