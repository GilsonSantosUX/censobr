CREATE TABLE "Usuario" (
	"idusuario" serial,
	"nome" character(255) NOT NULL,
	"cpf" character(11) NOT NULL UNIQUE,
	"senha" character(255) NOT NULL UNIQUE,
	"email" character(155) NOT NULL UNIQUE,
	"fkpapel" serial NOT NULL,
	"supervisor" character(11) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Endereco" (
	"idendereco" serial,
	"pais" character(50) NOT NULL UNIQUE DEFAULT 'Brasil',
	"cep" INTEGER NOT NULL UNIQUE,
	"estadoSigla" char(2) NOT NULL UNIQUE DEFAULT 'MS',
	"estado" character(155) NOT NULL UNIQUE DEFAULT 'Mato Grosso do Sul',
	"cidadeSigla" char(2) NOT NULL DEFAULT 'CG',
	"cidade" character(155) NOT NULL DEFAULT 'Campo Grande',
	"bairro" character(155) NOT NULL,
	"logradouro" character(255) NOT NULL,
	"numero" INTEGER NOT NULL,
	"complemento" character(155) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Relatorio" (
	"idrelatorio" serial,
	"dataInicio" date NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Papel" (
	"idpapel" serial,
	"sigla" char(2) NOT NULL UNIQUE,
	"descricao" character(80) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Entrevistado" (
	"identrevistado" serial,
	"fkUsuario" serial
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Pesquisa" (
	"idpesquisa" serial,
	"fkentrevistado" serial,
	"fkendereco" serial,
	"nome" character(255) NOT NULL,
	"cpf" character NOT NULL UNIQUE,
	"rg" character NOT NULL UNIQUE,
	"idade" INTEGER NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Regiao" (
	"idregiao" serial,
	"zona" character(80) NOT NULL UNIQUE
) WITH (
  OIDS=FALSE
);

CREATE TABLE "RegiaoEnderaco" (
	"idregiaoEndereco" serial,
	"fkregiao" serial,
	"fkendereco" serial
) WITH (
  OIDS=FALSE
);


-- INSERTS

INSERT INTO "Papel" (sigla,descricao) VALUES ('GG','Gerente Geral');
INSERT INTO "Papel" (sigla,descricao) VALUES ('GE','Gerente Geral');
INSERT INTO "Usuario" (nome,cpf,senha,email,fkpapel,supervisor) VALUES ('Admin','98765432100','admin@123','admin@censo.com.br',1,'98765432100');


-- PRIMARY KEY
ALTER TABLE "Usuario"
    ADD CONSTRAINT idusuario_pkey PRIMARY KEY (idusuario);

ALTER TABLE "Endereco"
    ADD CONSTRAINT idendereco_pkey PRIMARY KEY (idendereco);

ALTER TABLE "Relatorio"
    ADD CONSTRAINT idrelatorio_pkey PRIMARY KEY (idrelatorio);

ALTER TABLE "Papel"
    ADD CONSTRAINT idpapel_pkey PRIMARY KEY (idpapel);

ALTER TABLE "Entrevistado"
    ADD CONSTRAINT identrevistado_pkey PRIMARY KEY (identrevistado);

ALTER TABLE "Pesquisa"
    ADD CONSTRAINT idpesquisa_pkey PRIMARY KEY (idpesquisa);

ALTER TABLE "Regiao"
    ADD CONSTRAINT idregiao_pkey PRIMARY KEY (idregiao);

ALTER TABLE "RegiaoEnderaco"
    ADD CONSTRAINT idregiaoEnderaco_pkey PRIMARY KEY (idregiaoEnderaco);


-- FOREIGN KEY
ALTER TABLE "Usuario" ADD CONSTRAINT "Papel_fk" FOREIGN KEY ("fkpapel") REFERENCES "Papel"("idpapel");
ALTER TABLE "Usuario" ADD CONSTRAINT "Supervisor_fk" FOREIGN KEY ("supervisor") REFERENCES "Usuario"("cpf");

ALTER TABLE "Entrevistado" ADD CONSTRAINT "Entrevistado_fk0" FOREIGN KEY ("fkUsuario") REFERENCES "Usuario"("idusuario");

ALTER TABLE "Pesquisa" ADD CONSTRAINT "Entrevistado_fk" FOREIGN KEY ("fkentrevistado") REFERENCES "Entrevistado"("identrevistado");
ALTER TABLE "Pesquisa" ADD CONSTRAINT "Endereco_fk" FOREIGN KEY ("fkendereco") REFERENCES "Endereco"("idendereco");


ALTER TABLE "RegiaoEnderaco" ADD CONSTRAINT "Regiao_fk" FOREIGN KEY ("fkregiao") REFERENCES "Regiao"("idregiao");
ALTER TABLE "RegiaoEnderaco" ADD CONSTRAINT "Endereco_fk" FOREIGN KEY ("fkendereco") REFERENCES "Endereco"("idendereco");
