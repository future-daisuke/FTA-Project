/* �X�L�[�}�i���[�U�j�쐬�B�X�L�[�}��future,�p�X���[�hfuture */
create user fta identified by fta;
/* ���[�U�̃f�t�H���g�\�̈��ݒ� */
alter  user fta default tablespace USERS;
/* ���[�U�̈ꎞ�\�̈��ݒ� */
alter  user fta temporary tablespace TEMP;
/* ���[�U�̃f�t�H���g�\�̈�̗��p�����𖳐����ɐݒ� */
alter user fta quota UNLIMITED on USERS;
/* ���[�U�ɃV�X�e��������ݒ� */
grant ALTER SYSTEM to fta;
grant ALTER SESSION to fta;
grant CREATE MATERIALIZED VIEW to fta;
grant CREATE PROCEDURE to fta;
grant CREATE SEQUENCE to fta;
grant CREATE SESSION to fta;
grant CREATE SYNONYM to fta;
grant CREATE TABLE to fta;
grant CREATE TRIGGER to fta;
grant CREATE VIEW to fta;
grant EXECUTE ANY PROCEDURE to fta;
grant SELECT ANY DICTIONARY to fta;
grant SELECT ANY TABLE to fta;
grant create database link to fta;
grant create any type to fta;

/* http�|�[�g��8081�ɐݒ�. tomcat�̃f�t�H���g�Ƃ̏d������� */
exec dbms_xdb.sethttpport(8081);
/* DB�̃p�����[�^�ύX�����킹�Ď��{ */
alter system set recyclebin=off deferred;
alter system set sec_case_sensitive_logon=false;
alter system set "_optim_peek_user_binds"=false;
alter system set "_optimizer_skip_scan_enabled"=false;
alter system set "_optimizer_table_expansion"=false;
alter system set "_optimizer_use_feedback"=false;
/* default�v���t�@�C���̕ύX */
ALTER PROFILE DEFAULT LIMIT  PASSWORD_LIFE_TIME UNLIMITED;
ALTER PROFILE DEFAULT LIMIT  PASSWORD_LOCK_TIME UNLIMITED;
ALTER PROFILE DEFAULT LIMIT  PASSWORD_GRACE_TIME UNLIMITED;
ALTER PROFILE DEFAULT LIMIT  FAILED_LOGIN_ATTEMPTS UNLIMITED;
