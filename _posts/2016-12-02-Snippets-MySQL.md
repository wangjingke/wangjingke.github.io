---
layout: post
title: "Some Snippets in MySQL"
date: 2016-12-02
---

```mysql
/*Add new columns*/
ALTER TABLE credentials ADD username VARCHAR(20);

/*Change value of the first entry*/
UPDATE credentials SET username='' ORDER BY username ASC LIMIT 1;

/*Change column sequence*/
ALTER TABLE credentials MODIFY password VARCHAR(50) AFTER username;

```