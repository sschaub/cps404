DELETE FROM ItemStatus;

INSERT INTO ItemStatus
    Select ID, '2007-1-1', 'S', NULL, NULL
    FROM Items;
    
delete from Patron;

insert into Patron VALUES(1, 'Fred Jones', '2531534', '111111');
insert into Patron VALUES(2, 'Esmerelda Huntington', '5928492', '111112');


insert into ItemStatus VALUES(1, '2007-04-03', 'C', 1, '2007-04-10');
insert into ItemStatus VALUES(2, '2007-04-03', 'C', 1, '2007-04-10');
insert into ItemStatus VALUES(1, '2007-04-04', 'S', NULL, NULL);
insert into ItemStatus VALUES(3, '2007-04-05', 'C', 1, '2007-04-12');
insert into ItemStatus VALUES(1, '2007-04-05', 'C', 2, '2007-04-12');
insert into ItemStatus VALUES(4, '2007-04-04', 'C', 1, '2007-04-11');
insert into ItemStatus VALUES(5, '2007-04-03', 'C', 2, '2007-04-10');
insert into ItemStatus VALUES(6, '2007-04-03', 'C', 2, '2007-04-10');
insert into ItemStatus VALUES(5, '2007-04-05', 'S', NULL, NULL);


update NextID Set NextID = 2 WHERE TableName = 'Patron';
