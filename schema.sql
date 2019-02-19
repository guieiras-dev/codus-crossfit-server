-- Database: crossfit

-- DROP DATABASE crossfit;

CREATE DATABASE crossfit
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Table: public.challenges

-- DROP TABLE public.challenges;

CREATE TABLE public.challenges
(
    id bigint NOT NULL,
    title character varying(256) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    CONSTRAINT challenges_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.challenges
    OWNER to postgres;

-- Table: public.wip_challenges

-- DROP TABLE public.wip_challenges;

CREATE TABLE public.wip_challenges
(
    id bigint NOT NULL,
    challenge_id bigint NOT NULL,
    user_email character varying(256) COLLATE pg_catalog."default" NOT NULL,
    status character varying(256) COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    CONSTRAINT wip_challenges_pkey PRIMARY KEY (id),
    CONSTRAINT fk_wip_challenges_to_challenge FOREIGN KEY (challenge_id)
        REFERENCES public.challenges (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.wip_challenges
    OWNER to postgres;
