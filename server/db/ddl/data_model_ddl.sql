DROP TABLE IF EXISTS public.UserAccount CASCADE;
DROP SEQUENCE IF EXISTS UserAccountSeq;

DROP TABLE IF EXISTS public.Session CASCADE;
DROP TABLE IF EXISTS public.SampleMessage CASCADE;
DROP SEQUENCE IF EXISTS SampleMessageSeq;

DROP TABLE IF EXISTS public.Message CASCADE;
DROP SEQUENCE IF EXISTS MessageSeq;

DROP TABLE IF EXISTS public.ToDoDetail CASCADE;
DROP SEQUENCE IF EXISTS ToDoDetailSeq;

DROP TABLE IF EXISTS public.Todo CASCADE;
DROP SEQUENCE IF EXISTS TodoSeq;

DROP TABLE IF EXISTS public.SampleProduct CASCADE;
DROP SEQUENCE IF EXISTS SampleProductSeq;

DROP TABLE IF EXISTS public.Userlogin CASCADE;
DROP SEQUENCE IF EXISTS UserloginSeq;


CREATE TABLE public.UserAccount (
    id bigint NOT NULL,
    displayName text NOT NULL,
    userId text NOT NULL,
    pw text NOT NULL,
    deleteFlag boolean NOT NULL DEFAULT FALSE,
    createUser bigint,
    updateUser bigint,
    creation timestamp without time zone NOT NULL,
    modification timestamp without time zone NOT NULL,
    version bigint NOT NULL,
    PRIMARY KEY (id)
) WITHOUT OIDS;

ALTER TABLE public.UserAccount
    ADD UNIQUE (userId);


CREATE  SEQUENCE UserAccountSeq;

CREATE TABLE public.Session (
    fkUserAccount bigint NOT NULL,
    token text NOT NULL,
    expiration timestamp without time zone NOT NULL,
    createUser bigint,
    updateUser bigint,
    creation timestamp without time zone NOT NULL,
    modification timestamp without time zone NOT NULL,
    version bigint NOT NULL
) WITHOUT OIDS;

ALTER TABLE public.Session
    ADD UNIQUE (token);


CREATE TABLE public.SampleMessage (
    id bigint NOT NULL,
    message text NOT NULL,
    createUser bigint,
    updateUser bigint,
    creation timestamp without time zone NOT NULL,
    modification timestamp without time zone NOT NULL,
    version bigint NOT NULL,
    PRIMARY KEY (id)
) WITHOUT OIDS;


CREATE SEQUENCE SampleMessageSeq;

CREATE TABLE public.Message (
    id bigint NOT NULL,
    message text NOT NULL,
    createUser bigint,
    updateUser bigint,
    creation timestamp without time zone NOT NULL,
    modification timestamp without time zone NOT NULL,
    version bigint NOT NULL,
    PRIMARY KEY (id)
) WITHOUT OIDS;


CREATE SEQUENCE MessageSeq;

CREATE TABLE public.ToDoDetail (
    id bigint NOT NULL,
    task text NOT NULL,
    createUser bigint,
    updateUser bigint,
    creation timestamp without time zone NOT NULL,
    modification timestamp without time zone NOT NULL,
    version bigint NOT NULL,
    PRIMARY KEY (id)
) WITHOUT OIDS;


CREATE SEQUENCE ToDoDetailSeq;

CREATE TABLE public.Todo (
    id bigint NOT NULL,
    memo text NOT NULL,
    version bigint NOT NULL,
    PRIMARY KEY (id)
) WITHOUT OIDS;


CREATE SEQUENCE TodoSeq;

CREATE TABLE public.SampleProduct (
    id bigint NOT NULL,
    code text NOT NULL,
    name text NOT NULL,
    category text NOT NULL,
    quantity numeric NOT NULL,
    createUser bigint,
    updateUser bigint,
    creation timestamp without time zone NOT NULL,
    modification timestamp without time zone NOT NULL,
    version bigint NOT NULL,
    PRIMARY KEY (id)
) WITHOUT OIDS;


CREATE SEQUENCE SampleProductSeq;

CREATE TABLE public.Userlogin (
    id bigint NOT NULL,
    userid text NOT NULL,
    userpass text NOT NULL,
    PRIMARY KEY (id)
) WITHOUT OIDS;


create sequence  UserloginSeq;

ALTER TABLE public.Session ADD CONSTRAINT FK_Session__fkUserAccount FOREIGN KEY (fkUserAccount) REFERENCES public.UserAccount(id);