# π μλ£κ΅¬μ‘° (μ€ν / ν)

--------

## πμ€ν(Stack)
μ€ν(stack)μ΄λ μμ μ¬λ¦°λ€λ κ²μ μλ―Έν©λλ€.   
λ°λΌμ μ€ν μλ£κ΅¬μ‘°λΌλ κ²μ μ±μ μλ κ²μ²λΌ μ°¨κ³‘μ°¨κ³‘ μμ μ¬λ¦° ννμ μλ£κ΅¬μ‘°λ₯Ό λ§ν©λλ€.  
λνμ μΈ λ΄μ₯ν¨μ : push, peek, pop μ΄ μμ΅λλ€.

## π μ€νμ κ΅¬μ‘° λ° νΉμ§
![μ€ν](https://user-images.githubusercontent.com/71051838/165237992-2d1a3b99-fdd2-4399-8132-a2a17d49d912.PNG)
pushλ μλ‘­κ² λ°μ΄ν°λ₯Ό λ£λ κ²μ μλ―Έν©λλ€.  
peekμ κ°μ₯ λ§μ§λ§μ λ€μ΄κ° λ°μ΄ν°λ₯Ό νμΈνλ κ²μ μλ―Έν©λλ€.   
popμ κ°μ₯ λ§μ§λ§μ λ€μ΄κ° λ°μ΄ν°λ₯Ό μΆμΆνλ κ²μ μλ―Έν©λλ€.  
λ°λΌμ μ€νμ μκ° μμμ λ°λΌ μλ£κ° μμ¬μ κ°μ₯ λ§μ§λ§μ μ½μλ μλ£κ° κ°μ₯ λ¨Όμ  μ­μ λλ€λ
κ΅¬μ‘°μ  νΉμ§μ κ°μ§κ² λ©λλ€.  
μ΄λ¬ν μ€νμ κ΅¬μ‘°λ₯Ό νμμ μΆ(LIFO, Last-In-First-Out) κ΅¬μ‘°λΌκ³  λ§ν©λλ€.

## π μ€νμ μ₯λ¨μ 
top μ ν΅ν΄ μ κ·ΌνκΈ° λλ¬Έμ λ°μ΄ν° μ κ·Ό, μ½μ, μ­μ κ° λΉ λ¦λλ€.  
top μμΉ μ΄μΈμ λ°μ΄ν°μ μ κ·Όν  μ μκΈ° λλ¬Έμ νμμ΄ λΆκ°λ₯νλ€. νμνλ €λ©΄ λͺ¨λ  λ°μ΄ν°λ₯Ό κΊΌλ΄λ©΄μ μ§νν΄μΌ ν©λλ€.

## π μ€νμ νμ© μμ
μ€νμ νΉμ§μΈ  νμμ μΆ(LIFO)μ νμ©νμ¬ μ¬λ¬ λΆμΌμμ νμ© κ°λ₯νλ€.

* μΉ λΈλΌμ°μ  λ°©λ¬ΈκΈ°λ‘ (λ€λ‘ κ°κΈ°) : κ°μ₯ λμ€μ μ΄λ¦° νμ΄μ§λΆν° λ€μ λ³΄μ¬μ€λ€.
* μ€ν μ·¨μ (undo) : κ°μ₯ λμ€μ μ€νλ κ²λΆν° μ€νμ μ·¨μνλ€.
* μμμ κ΄νΈ κ²μ¬ (μ°μ°μ μ°μ μμ ννμ μν κ΄νΈ κ²μ¬)
* μ¬κ· μκ³ λ¦¬μ¦
* DFS μκ³ λ¦¬μ¦
* κ΄νΈ κ²μ¬, νμ μ°μ°λ², λ¬Έμμ΄ μ­μ μΆλ ₯ λ±

## π ν(Queue)
Queue μ μ¬μ μ  μλ―Έλ 1. (λ¬΄μμ κΈ°λ€λ¦¬λ μ¬λ, μλμ°¨ λ±μ) μ€ , νΉμ μ€μ μμ κΈ°λ€λ¦¬λ κ²μ μλ―Έν©λλ€.  
λ°λΌμ μΌμμνμμ λμ΄λμ°μμ μ€μ μμ κΈ°λ€λ¦¬λ κ², μνμμ λ¨Όμ  μ¨ μ¬λμ μλ¬΄λ₯Ό μ°½κ΅¬μμ μ²λ¦¬νλ κ²κ³Ό κ°μ΅λλ€.  
μ μμ μΆ(FIFO, First in first out) λ°©μμ κ΅¬μ‘°λΌκ³  λ§ν©λλ€. 
λνμ μΈ λ΄μ₯ν¨μ : put, peek, get


## π νμ κ΅¬μ‘° λ° νΉμ§
![ν](https://user-images.githubusercontent.com/71051838/165237999-ae5a8660-22f8-407b-9392-490d311927d1.PNG)
putλ μλ‘­κ² λ°μ΄ν°λ₯Ό λ£λ κ²μ μλ―Έν©λλ€.  
peekμ κ°μ₯ μ²μμ λ€μ΄κ° λ°μ΄ν°λ₯Ό νμΈνλ κ²μ μλ―Έν©λλ€.   
getμ κ°μ₯ μ²μμ λ€μ΄κ° λ°μ΄ν°λ₯Ό μΆμΆνλ κ²μ μλ―Έν©λλ€.   
λ°μ΄ν°κ° μ½μλλ κ³³μ rear, λ°μ΄ν°κ° μ κ±°λλ κ³³μ front λΌ νλ€. λ°μ΄ν°λ₯Ό μ­μ νκΈ° μ μλ νκ° empty νμ§, νμ λ°μ΄ν°λ₯Ό μΆκ°νλ € ν  λλ νκ° full μΈμ§ νμΈ ν μ§νν΄μΌ ν©λλ€.  
front, rear λ μ¦κ°λ§ νλ λ°©μμ΄κ³  μ€μ λ‘λ front μμͺ½μ κ³΅κ°μ΄ μλλΌλ μ½μν  μ μλ κ²½μ°κ° λ°μν  μ μμ΅λλ€.  
μ½μμ μν΄μλ κ³μν΄μ μμλ€μ μ΄λμμΌμΌ ν©λλ€.

## π νμ μ₯λ¨μ 
λ°μ΄ν° μ κ·Ό, μ½μ, μ­μ κ° λΉ λ₯΄λ€.
ν μ­μ μ€νκ³Ό λ§μ°¬κ°μ§λ‘ μ€κ°μ μμΉν λ°μ΄ν°μ λν μ κ·Όμ΄ λΆκ°λ₯νλ€.

## π νμ νμ© μμ
νλ μ£Όλ‘ λ°μ΄ν°κ° μλ ₯λ μκ° μμλλ‘ μ²λ¦¬ν΄μΌ ν  νμκ° μλ μν©μ μ΄μ©ν©λλ€.

* νλ¦°ν° μΈμ λκΈ°μ΄
* μν μλ¬΄
* λκΈ° μμ κ΄λ¦¬
* νλ‘μΈμ€ κ΄λ¦¬
* λλΉ μ°μ  νμ(BFS, Breadth-First Search) κ΅¬ν
* μΊμ(Cache) κ΅¬ν