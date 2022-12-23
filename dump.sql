--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "shortUrl" character varying(8) NOT NULL,
    url character varying NOT NULL,
    views integer DEFAULT 0 NOT NULL,
    "userId" integer NOT NULL,
    createdat date DEFAULT now()
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100),
    email character varying(500),
    password character varying(100),
    createdat date DEFAULT now()
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, '0yw1n6s', 'https://www.notion.so/bootcampra/Projeto-Shortly-API-3ef2afe78c254d069f862c036efa6f04', 2, 1, '2022-12-23');
INSERT INTO public.urls VALUES (2, 'vc2hnat', 'https://www.notion.so/bootcampra/Projeto-Shortly-API-3ef2afe78c254d069f862c036efa6f04', 5, 1, '2022-12-23');
INSERT INTO public.urls VALUES (7, 'w2xedb3', 'https://www.notion.so/bootcampra/Projeto-Shortly-API-3ef2afe78c254d069f862c036efa6f04', 0, 4, '2022-12-23');
INSERT INTO public.urls VALUES (6, '5gicfi6', 'https://www.notion.so/bootcampra/Projeto-Shortly-API-3ef2afe78c254d069f862c036efa6f04', 2, 3, '2022-12-23');
INSERT INTO public.urls VALUES (43, '10n5lrz', 'https://github.com/Alyson02/hexabytefront/blob/main/src/App/pages/Login/index.js', 0, 5, '2022-12-23');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'alyson', 'alyson@gmail.com', '$2b$10$VoMqeE1Lx5.wiv11BDu...IihGhI86e92by0lYdSJbxEbxyASTlJC', '2022-12-23');
INSERT INTO public.users VALUES (3, 'maycon', 'maycon@gmail.com', '$2b$10$UEGdGQL662ckRyCI7igAK.fA6S79LrJb65AiFnz1Cb0VD.DmSzuJi', '2022-12-23');
INSERT INTO public.users VALUES (4, 'delma', 'delma@gmail.com', '$2b$10$4cs3aTaj7x3XHHBZTdU3puoC0SmHMJwHg1jrEP95LV1SUOhl/NS/S', '2022-12-23');
INSERT INTO public.users VALUES (5, 'darth', 'darth@gmail.com', '$2b$10$kmgdJzEZZ96jO1JHR4AtV.cmv68VurZtS2YW.wah1bh3UMq6e1wVy', '2022-12-23');
INSERT INTO public.users VALUES (6, 'alyson2', 'alyson2@gmail.com', '$2b$10$IpV0OGisoea./OlDuUwibuSjOT9jcVV.aWSt0TJxpV1045fPBey.S', '2022-12-23');


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 43, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_userid_fkey FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

