alter table peliculas add column titulo VARCHAR(25)
alter table peliculas add column genero VARCHAR(25)
alter table peliculas drop column idusuario

alter table roluser rename column id to idrol
alter table roluser drop column descripcion
select * from roluser
select * from users

create table rol(
	id serial PRIMARY KEY,
	descripcion varchar(25)
)

insert into rol (descripcion) values('administrador');
insert into rol (descripcion) values('cliente');
select * from rol


create table roluser(
	idrol bigint not null,
	idusuario bigint not null
)

insert into roluser (idrol, idusuario) values (1,2);
insert into roluser (idrol, idusuario) values (2,1);

select * from roluser

select us.nombre, r.descripcion as cargo from users as us
	inner join roluser as ru
on ru.idusuario = us.id
	inner join rol as r
on ru.idrol = r.id

select us.nombre, r.descripcion from users as us
	inner join roluser as ru
on ru.idusuario = us.id
	inner join rol as r
on r.id = ru.idrol

insert into users (nombre, apellido) values ('Karen', 'Santana')
select * from users
