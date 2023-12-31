PGDMP      ,            	    {           MediApp    16.0    16.0 1               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16562    MediApp    DATABASE     |   CREATE DATABASE "MediApp" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE "MediApp";
                postgres    false            �            1259    16679 
   asignacion    TABLE     �   CREATE TABLE public.asignacion (
    idasignacion integer NOT NULL,
    idpaciente integer,
    puntaje smallint,
    idprofesional integer
);
    DROP TABLE public.asignacion;
       public         heap    postgres    false            �            1259    16678    asignacion_idasignacion_seq    SEQUENCE     �   CREATE SEQUENCE public.asignacion_idasignacion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.asignacion_idasignacion_seq;
       public          postgres    false    226                       0    0    asignacion_idasignacion_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.asignacion_idasignacion_seq OWNED BY public.asignacion.idasignacion;
          public          postgres    false    225            �            1259    16661 	   pacientes    TABLE     �   CREATE TABLE public.pacientes (
    idpaciente integer NOT NULL,
    nombre character varying(255),
    pass character varying(255),
    ciudad character varying(255),
    email character varying(255)
);
    DROP TABLE public.pacientes;
       public         heap    postgres    false            �            1259    16660    pacientes_idpaciente_seq    SEQUENCE     �   CREATE SEQUENCE public.pacientes_idpaciente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.pacientes_idpaciente_seq;
       public          postgres    false    222                        0    0    pacientes_idpaciente_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.pacientes_idpaciente_seq OWNED BY public.pacientes.idpaciente;
          public          postgres    false    221            �            1259    16670 	   preguntas    TABLE     �   CREATE TABLE public.preguntas (
    idpregunta integer NOT NULL,
    pregunta text,
    opcion_1 character varying(255),
    opcion_2 character varying(255),
    opcion_3 character varying(255),
    activa boolean
);
    DROP TABLE public.preguntas;
       public         heap    postgres    false            �            1259    16669    preguntas_idpregunta_seq    SEQUENCE     �   CREATE SEQUENCE public.preguntas_idpregunta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.preguntas_idpregunta_seq;
       public          postgres    false    224            !           0    0    preguntas_idpregunta_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.preguntas_idpregunta_seq OWNED BY public.preguntas.idpregunta;
          public          postgres    false    223            �            1259    16647    profesionales    TABLE     �   CREATE TABLE public.profesionales (
    idprofesional integer NOT NULL,
    nombre character varying(255),
    especialidad character varying(255),
    activa boolean,
    idrango integer
);
 !   DROP TABLE public.profesionales;
       public         heap    postgres    false            �            1259    16646    profesionales_idprofesional_seq    SEQUENCE     �   CREATE SEQUENCE public.profesionales_idprofesional_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.profesionales_idprofesional_seq;
       public          postgres    false    220            "           0    0    profesionales_idprofesional_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.profesionales_idprofesional_seq OWNED BY public.profesionales.idprofesional;
          public          postgres    false    219            �            1259    16640    rangos    TABLE     �   CREATE TABLE public.rangos (
    idrango integer NOT NULL,
    nombre character varying(255),
    inicio smallint,
    fin smallint
);
    DROP TABLE public.rangos;
       public         heap    postgres    false            �            1259    16639    rangos_idrango_seq    SEQUENCE     �   CREATE SEQUENCE public.rangos_idrango_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.rangos_idrango_seq;
       public          postgres    false    218            #           0    0    rangos_idrango_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.rangos_idrango_seq OWNED BY public.rangos.idrango;
          public          postgres    false    217            �            1259    16631    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    idusuario integer NOT NULL,
    nombre character varying(255),
    email character varying(255),
    pass character varying(255)
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    16630    usuarios_idusuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_idusuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.usuarios_idusuario_seq;
       public          postgres    false    216            $           0    0    usuarios_idusuario_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.usuarios_idusuario_seq OWNED BY public.usuarios.idusuario;
          public          postgres    false    215            n           2604    16682    asignacion idasignacion    DEFAULT     �   ALTER TABLE ONLY public.asignacion ALTER COLUMN idasignacion SET DEFAULT nextval('public.asignacion_idasignacion_seq'::regclass);
 F   ALTER TABLE public.asignacion ALTER COLUMN idasignacion DROP DEFAULT;
       public          postgres    false    225    226    226            l           2604    16664    pacientes idpaciente    DEFAULT     |   ALTER TABLE ONLY public.pacientes ALTER COLUMN idpaciente SET DEFAULT nextval('public.pacientes_idpaciente_seq'::regclass);
 C   ALTER TABLE public.pacientes ALTER COLUMN idpaciente DROP DEFAULT;
       public          postgres    false    221    222    222            m           2604    16673    preguntas idpregunta    DEFAULT     |   ALTER TABLE ONLY public.preguntas ALTER COLUMN idpregunta SET DEFAULT nextval('public.preguntas_idpregunta_seq'::regclass);
 C   ALTER TABLE public.preguntas ALTER COLUMN idpregunta DROP DEFAULT;
       public          postgres    false    224    223    224            k           2604    16650    profesionales idprofesional    DEFAULT     �   ALTER TABLE ONLY public.profesionales ALTER COLUMN idprofesional SET DEFAULT nextval('public.profesionales_idprofesional_seq'::regclass);
 J   ALTER TABLE public.profesionales ALTER COLUMN idprofesional DROP DEFAULT;
       public          postgres    false    219    220    220            j           2604    16643    rangos idrango    DEFAULT     p   ALTER TABLE ONLY public.rangos ALTER COLUMN idrango SET DEFAULT nextval('public.rangos_idrango_seq'::regclass);
 =   ALTER TABLE public.rangos ALTER COLUMN idrango DROP DEFAULT;
       public          postgres    false    218    217    218            i           2604    16634    usuarios idusuario    DEFAULT     x   ALTER TABLE ONLY public.usuarios ALTER COLUMN idusuario SET DEFAULT nextval('public.usuarios_idusuario_seq'::regclass);
 A   ALTER TABLE public.usuarios ALTER COLUMN idusuario DROP DEFAULT;
       public          postgres    false    216    215    216                      0    16679 
   asignacion 
   TABLE DATA           V   COPY public.asignacion (idasignacion, idpaciente, puntaje, idprofesional) FROM stdin;
    public          postgres    false    226   �8                 0    16661 	   pacientes 
   TABLE DATA           L   COPY public.pacientes (idpaciente, nombre, pass, ciudad, email) FROM stdin;
    public          postgres    false    222   �8                 0    16670 	   preguntas 
   TABLE DATA           _   COPY public.preguntas (idpregunta, pregunta, opcion_1, opcion_2, opcion_3, activa) FROM stdin;
    public          postgres    false    224   �9                 0    16647    profesionales 
   TABLE DATA           ]   COPY public.profesionales (idprofesional, nombre, especialidad, activa, idrango) FROM stdin;
    public          postgres    false    220   �:                 0    16640    rangos 
   TABLE DATA           >   COPY public.rangos (idrango, nombre, inicio, fin) FROM stdin;
    public          postgres    false    218   �;                 0    16631    usuarios 
   TABLE DATA           B   COPY public.usuarios (idusuario, nombre, email, pass) FROM stdin;
    public          postgres    false    216   �;       %           0    0    asignacion_idasignacion_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.asignacion_idasignacion_seq', 4, true);
          public          postgres    false    225            &           0    0    pacientes_idpaciente_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.pacientes_idpaciente_seq', 5, true);
          public          postgres    false    221            '           0    0    preguntas_idpregunta_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.preguntas_idpregunta_seq', 11, true);
          public          postgres    false    223            (           0    0    profesionales_idprofesional_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.profesionales_idprofesional_seq', 10, true);
          public          postgres    false    219            )           0    0    rangos_idrango_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.rangos_idrango_seq', 5, true);
          public          postgres    false    217            *           0    0    usuarios_idusuario_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.usuarios_idusuario_seq', 6, true);
          public          postgres    false    215            z           2606    16686    asignacion asignacion_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.asignacion
    ADD CONSTRAINT asignacion_pkey PRIMARY KEY (idasignacion);
 D   ALTER TABLE ONLY public.asignacion DROP CONSTRAINT asignacion_pkey;
       public            postgres    false    226            v           2606    16668    pacientes pacientes_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT pacientes_pkey PRIMARY KEY (idpaciente);
 B   ALTER TABLE ONLY public.pacientes DROP CONSTRAINT pacientes_pkey;
       public            postgres    false    222            x           2606    16677    preguntas preguntas_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.preguntas
    ADD CONSTRAINT preguntas_pkey PRIMARY KEY (idpregunta);
 B   ALTER TABLE ONLY public.preguntas DROP CONSTRAINT preguntas_pkey;
       public            postgres    false    224            t           2606    16654     profesionales profesionales_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.profesionales
    ADD CONSTRAINT profesionales_pkey PRIMARY KEY (idprofesional);
 J   ALTER TABLE ONLY public.profesionales DROP CONSTRAINT profesionales_pkey;
       public            postgres    false    220            r           2606    16645    rangos rangos_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.rangos
    ADD CONSTRAINT rangos_pkey PRIMARY KEY (idrango);
 <   ALTER TABLE ONLY public.rangos DROP CONSTRAINT rangos_pkey;
       public            postgres    false    218            p           2606    16638    usuarios usuarios_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (idusuario);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    216            |           2606    16687 %   asignacion asignacion_idpaciente_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.asignacion
    ADD CONSTRAINT asignacion_idpaciente_fkey FOREIGN KEY (idpaciente) REFERENCES public.pacientes(idpaciente);
 O   ALTER TABLE ONLY public.asignacion DROP CONSTRAINT asignacion_idpaciente_fkey;
       public          postgres    false    4726    226    222            }           2606    16692 (   asignacion asignacion_idprofesional_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.asignacion
    ADD CONSTRAINT asignacion_idprofesional_fkey FOREIGN KEY (idprofesional) REFERENCES public.profesionales(idprofesional);
 R   ALTER TABLE ONLY public.asignacion DROP CONSTRAINT asignacion_idprofesional_fkey;
       public          postgres    false    4724    226    220            {           2606    16655 (   profesionales profesionales_idrango_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.profesionales
    ADD CONSTRAINT profesionales_idrango_fkey FOREIGN KEY (idrango) REFERENCES public.rangos(idrango);
 R   ALTER TABLE ONLY public.profesionales DROP CONSTRAINT profesionales_idrango_fkey;
       public          postgres    false    218    220    4722               &   x�3�4�44�4�22L9͹L8M8M9�b���� D$           x�M��n�@���p,\O�u�N��-EP#����qd(
!�U��7Vkj��,���$GE�
HY�TMGg�6���iUJz�@�og�H����������W^�LzT���"�ٶ�uBĜ�,�[�&���IPc(��A@�Ĕ���1����i�S��!�V쨛�+�p�95^��]�_p
�Ǫ_�4�c�`Q��~v�B;��r�s������>�&�;�����6Î��>S/���1_XEV����8�`D���>;J&�eh��������� �cI�~ �p         �   x�mN�
A�s_�/�[��`%��6���p�9v������ޏ�����0��l#{�#/��(=����8�ᴆ�>�����H͹D2�t���`#����&��/���Ԅ����>�}d�_�����H�F%>N^~���]9٬.q�3Z��kvVY�U�(Q��}JM]���?���z�^Wk         �   x���Mn�0��3��	*H�e�R����W�D�,9Φw�)�S�ϒ����޼��'���:��	1�s�X�&:R��&'�z��J�q޴:ZIя
5\�C�g��sn�r����Q2T�xIߪ�D��X|�i�SH��7��S���^���A�.�6�P�Z	>�^2�ã��ok������Z����E�:|0���\�         8   x�3�J�K�W0�4�4�2��8-8���\cNCCNCc.(߄��L�b���� �u�         \  x���;s�@ �k�W��>����@�("��@^��q���d��d�b���v�H*f��^	{\\�6�eaA����4���.�-W>҆E�%%Ίgi��H�G�<�����QM�����mۛk�9:Ǔu�h��(�ﳎ�wi��30�hti���eW��7n���+�����M��p�R�w#��V3�2ll-V3���E��Y���z7�0����Рi蹶��s��6�n������F��v�Xu�Aۣ���e=���I��m�?Y��l����=?��1�+���"���X�awL��b5�&�9��7o��n{Z�#g��z^7o�b���>Ҽ4f�a_��5彯�� ���     