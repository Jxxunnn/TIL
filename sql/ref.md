# SQL이란 무엇인가?

## 데이터 추출을 내가 해야만 하는 이유

직장에서 일하다 보면 감으로 결정하지 말고 데이터를 살펴서 근거 있는 판단을 하고 싶은 마음이 생기지요. 그래야만 다른 직군을 만나서 설득을 해야 할 때 나만의 취향 고백이 아닌 논거를 가진 주장을 펼칠 수 있게 되니까요. 꼭 그런 게 아니더라도 내 생각이 맞는지 스스로 확인할 방법이 있다면 고민할 시간을 짧게 만들어서 보다 더 효율적으로 일할수 있지 않겠어요?

그래서 우리는 데이터 분석이라는 걸 좀 해봐야겠는데, 첫 번째 관문 - 데이터 가져오기- 에서 탁 걸려버립니다. 일단 데이터를 내 손에 쥐어야 이리 볶고 저리 지지고 해서 분석이라는 걸 해보기나 할 텐데, DBMS라는 무시무시한 녀석이 꼬~옥 품고 있는 데이터를 어찌하면 내 손으로 가져온단 말입니까? 개발자에게 요청하라구요? 진짜 그러면 되나요?

개발자에게 데이터 추출을 요청하는 상황을 한 번 살펴봅시다. 머릿속에 떠오르는 상상 속 조건을 가장 친절하게 표현해서 개발에게 글로 설명을 합니다. 개발자는 무척 바쁘니, 짬이 날 때 요청 사항을 읽어보고 빠르게 추출해서 엑셀 파일로 담아서 전달해주지요. 다른 일을 하고 있던 기획자는 결과를 받아서 살펴보기 시작합니다. 보다 보니 이거.. 상상과 다르다는 것을 발견하게 됩니다. 추출 조건을 이렇게 저렇게 좀 바꿔서 다시 뽑아 보고 싶다.... 라는 욕망이 꿈틀거리지만, 다시 뽑아 달라고 하기가 꺼려집니다. 왜냐고요? 미안하니까요...

첫 째, 데이터는 내가 막 궁금해하는 바로 그 순간에 가질 수 있어야 합니다.

둘째, 내가 필요한 데이터는 절대 한 번에 뽑을 수 없습니다. 여러 번 시행착오를 거쳐야 해요...

셋째, 기획자가 하는 표현을 개발자가 이해해서 다시 코드로 옮기는 과정에서 여러 가지 오해가 발생됩니다.

이런 이유들 때문에 데이터는 목마른 사람이 샘 파듯이 필요한 사람이 직접 뽑을 수 있어야 해요. 그게 안되면 데이터 분석이라는 건 물 건너가는 것이지요. 그리고 보통 먼저 가설이 생기고 데이터를 본다기보다는 평상시에 데이터를 즐겨 (재미 삼아) 관찰하다가 특이점을 발견하게 되어서 의미 있는 가설이 생길 때가 많아요. 즉, 자꾸 관찰하다 보니 뭔가가 얻어걸리는 거죠. 그.래.서. 스스로 뽑을 수 있어야 한다고요~~~

## 데이터는 어디에 들어있나요?

스스로 데이터를 추출하기로 마음먹었다면 이제 데이터가 어디에 들어 있는지 알아야겠지요. 데이터는 DBMS라고 불리는 제품들에 들어있어요. 그런데 DBMS는 제품 이름이 아니고 '휴대폰'처럼 품목 이름이지요. DBMS = 'Dasebase Management System'의 약자입니다. 실제 제품 이름은 'Mysql', '오라클' 같은 이름을 갖고 있어요. 휴대폰의 제품 이름이 아이폰, 갤럭시폰 같은 이름을 갖고 있듯이요. 함께 일을 하고 있는 개발자분에게 물어보세요. 우리는 어떤 DBMS 제품을 쓰고 있어요?라고 말이죠...~

## 자, 그럼 SQL는 뭔가요?

DBMS 제품이 데이터를 갖고 있는 것까지는 알았잖아요? 그럼 데이터를 가져오기 위해서는 DBMS에게 명령을 내릴 수 있어야겠지요. 즉 DBMS가 이해하는 언어를 우리가 알아야 한다는 말입니다. DBMS 제품이면 무엇이든 이해하는 언어가 바로 SQL입니다. 그 제품이 오라클이든, Mysql이든 관계없이 SQL 문법으로만 명령하면 내가 필요한 데이터를 가져올 수 있어요. 왜냐하면 표준으로 지정되어 있거든요. 영어만 익히면 어느 나라에 가서도 대략 말이 통하듯이 SQL만 익히면 DBMS 제품과 대화를 할 수 있게 됩니다.

SQL은 'structured query language' 의 약어이고요, 한글로 옮기면 '구조화된 질의 언어' 정도가 되겠습니다. 중요한 건 SQL은 언어라는 것이고, 그렇기에 SQL만의 단어가 있고, 문법이 있답니다. 그런데 영어 같은 진짜 사람들이 쓰는 언어에 비해서는 진짜 말도 안 될 정도로 단어 수도 적고 문법도 정말 간단해요. 해서 누구든지 이 SQL을 익히지 못할 아무런 이유가 없어요. 괜스레 개발자들이나 하는 기술이지... 라는 막연한 생각이 나를 가로막고 있을 뿐, 실제로는 아주 아주 간단한 녀석이에요. "여러분! 다들 해외 나가시면 영어로 스타벅스에 가서 커피 주문들 하시잖아요? " 그 어려운 영어로 외국인에게 커피 주문을 하실 수 있다면 SQL은 당연히 익힐 수 있는 정도랍니다.

자 이제 SQL이 무엇인지 어디에 쓰는 물건인지는 이해되셨죠? 그럼 다음 글부터 하나하나 차근차근 실습도 해가면서 익혀보아요~

# 강의 1.

## SELECT문

### ex 1)

```sql
SELECT * FROM Customers;
SELECT CustomerID, CustomerName FROM Customers;
```

SELECT문 - 어디 테이블에서 어떤 데이터를 가져오겠다.

### ex 2)

Select all the different values from the Country column in the Customers table.

```sql
SELECT DISTINCT Country FROM Customers;
```

DISTINCT는 중복을 제거합니다.

## WHERE문

### ex 1)

Select all records where the City column has the value "Berlin"

```sql
SELECT * FROM Customers
WHERE City = 'Berlin';
```

### ex 2)

Use the `NOT keyword` to select all records where City is NOT "Berlin".

```sql
SELECT * FROM Customers
WHERE NOT City = 'Berlin';
```

### ex 3)

Select all records where the CustomerID column has the value 32.

```sql
SELECT * FROM Customers
WHERE CustomerID = 32;
```

### ex 4)

Select all records where the City column has the value 'Berlin' and the PostalCode column has the value 12209.

```sql
SELECT * FROM Customers
WHERE City = 'Berlin'
AND PostalCode = 12209;
```

### ex 5)

Select all records where the City column has the value 'Berlin' or 'London'.

```sql
SELECT * FROM Customers
WHERE City = 'Berlin'
OR City = 'London';
```

## ORDER BY

### ex 1)

Select all records from the Customers table, sort the result alphabetically by the column City.

```sql
SELECT * FROM Customers
ORDER BY City;
```

### ex 2)

Select all records from the Customers table, sort the result reversed alphabetically by the column City.

```sql
SELECT * FROM Customers
ORDER BY City DESC;
```

ASC - 오름차순
DESC - DESCENDING 내림차순으로 정렬

### ex 3)

Select all records from the Customers table, sort the result alphabetically, first by the column Country, then, by the column City.

```sql
SELECT * FROM Customers
ORDER BY Country, City;
```

## Insert

Insert a new record in the Customers table.

```sql
INSERT INTO Customers (
CustomerName,
Address,
City,
PostalCode,
Country)
VALUES (
'Hekkan Burger',
'Gateveien 15',
'Sandnes',
'4306',
'Norway');
```

## Null

Select all records from the Customers where the PostalCode column is empty.

```sql
SELECT * FROM Customers
WHERE PostalCode IS NULL;
```

Select all records from the Customers where the PostalCode column is NOT empty.

```sql
SELECT * FROM Customers
WHERE PostalCode IS NOT NULL;
```

## Update

Update the City column of all records in the Customers table.

```sql
UPDATE Customers
SET City = 'Oslo';
```

Set the value of the City columns to 'Oslo', but only the ones where the Country column has the value "Norway".

```sql
UPDATE Customers
SET City = 'Oslo'
WHERE Country = 'Norway';
```

Update the City value and the Country value.

```sql
UPDATE Customers
SET City = 'Oslo',
Country = 'Norway'
WHERE CustomerID = 32;
```

## DELETE

Delete all the records from the Customers table where the Country value is 'Norway'.

```sql
DELETE FROM Customers
WHERE Country = 'Norway';
```

Delete all the records from the Customers table.

```sql
DELETE FROM
 Customers;
```

## Functions

Use the MIN function to select the record with the smallest value of the Price column.

```sql
SELECT MIN(Price)
FROM Products;
```

Use an SQL function to select the record with the highest value of the Price column.

```sql
SELECT MAX(Price)
FROM Products;
```

Use the correct function to return the number of records that have the Price value set to 18.

```sql
SELECT COUNT(*)
FROM Products
WHERE Price = 18;
```

Use an SQL function to calculate the average price of all products.

```sql
SELECT AVG(Price)
FROM Products;
```

Use an SQL function to calculate the sum of all the Price column values in the Products table.

```sql
SELECT SUM(Price)
FROM Products;
```

## Like

Select all records where the value of the City column starts with the letter "a".

```sql
SELECT * FROM Customers
WHERE City LIKE 'a%';
```

Select all records where the value of the City column ends with the letter "a".

```sql
SELECT \* FROM Customers
WHERE City LIKE '%a';
```

Select all records where the value of the City column contains the letter "a".

```sql
SELECT \* FROM Customers
WHERE City LIKE '%a%';
```

Select all records where the value of the City column starts with letter "a" and ends with the letter "b".

```sql
SELECT * FROM Customers
WHERE City LIKE 'a%b';
```

Select all records where the value of the City column does NOT start with the letter "a".

```sql
SELECT * FROM Customers
WHERE City NOT LIKE 'a%';
```

## Wildcards

Select all records where the second letter of the City is an "a".

```sql
SELECT \* FROM Customers
WHERE City LIKE '\_a%';
```

Select all records where the first letter of the City is an "a" or a "c" or an "s".

```sql
SELECT \* FROM Customers
WHERE City LIKE '[acs]%';
```

Select all records where the first letter of the City starts with anything from an "a" to an "f".

```sql
SELECT * FROM Customers
WHERE City LIKE '[a-f]%';
```

Select all records where the first letter of the City is NOT an "a" or a "c" or an "f".

```sql
SELECT * FROM Customers
WHERE City LIKE '[!acf]%';
```

## In

Use the `IN operator` to select all the records where Country is either "Norway" or "France".

```sql
SELECT \* FROM Customers
WHERE Country IN ('Norway','France');
```

Use the IN operator to select all the records where Country is NOT "Norway" and NOT "France".

```sql
SELECT \* FROM Customers WHERE Country NOT IN ('Norway', 'France');
```

## Between

Use the `BETWEEN operator` to select all the records where the value of the Price column is between 10 and 20.

```sql
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;
```

Use the BETWEEN operator to select all the records where the value of the Price column is NOT between 10 and 20.

```sql
SELECT * FROM Products
WHERE Price NOT BETWEEN 10 AND 20;
```

Use the BETWEEN operator to select all the records where the value of the ProductName column is alphabetically between 'Geitost' and 'Pavlova'.

```sql
SELECT * FROM Products
WHERE ProductName BETWEEN 'Geitost' AND 'Pavlova';
``
```

## Alias

When displaying the Customers table, make an ALIAS of the PostalCode column, the column should be called Pno instead.

```sql
SELECT CustomerName,
Address,
PostalCode AS Pno
FROM Customers;
```

When displaying the Customers table, refer to the table as Consumers instead of Customers.

```sql
SELECT *
FROM Customers AS Consumers;
```

## Join

Insert the missing parts in the JOIN clause to join the two tables Orders and Customers, using the CustomerID field in both tables as the relationship between the two tables.

```sql
SELECT \*
FROM Orders
LEFT JOIN Customers
ON Orders.CustomerID=Customers.CustomerID;
```

Choose the correct JOIN clause to select all records from the two tables where there is a match in both tables.

```sql
SELECT \*
FROM Orders
INNER JOIN Customers
ON Orders.CustomerID=Customers.CustomerID;
```

Choose the correct JOIN clause to select all the records from the Customers table plus all the matches in the Orders table.

```sql
SELECT \*
FROM Orders
RIGHT JOIN Customers
ON Orders.CustomerID=Customers.CustomerID;
```

## Group By

List the number of customers in each country.

```sql
SELECT COUNT (CustomerID),
Country
FROM Customers
GROUP BY Country;
```

List the number of customers in each country, ordered by the country with the most customers first.

```sql
SELECT
COUNT
(CustomerID),
Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;
```

## Database

Write the correct SQL statement to create a new database called testDB.

```sql
CREATE DATABASE testDB;
```

Write the correct SQL statement to create a new table called Persons.

```sql
CREATE TABLE Persons
(
PersonID int,
LastName varchar(255),
FirstName varchar(255),
Address varchar(255),
City varchar(255)
);
```

Write the correct SQL statement to delete a database named testDB.

```sql
DROP DATABASE testDB;
```

Write the correct SQL statement to delete a table called Persons.

```sql
DROP TABLE Persons;
```

Use the TRUNCATE statement to delete all data inside a table.

```sql
TRUNCATE TABLE
 Persons;
```

Add a column of type DATE called Birthday.

```sql
ALTER TABLE
 Persons
ADD Birthday DATE;
```

Delete the column Birthday from the Persons table.

```sql
ALTER TABLE Persons
DROP COLUMN Birthday;
```
