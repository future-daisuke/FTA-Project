/* スキーマ（ユーザ）作成。スキーマ名future,パスワードfuture */
create user fta identified by fta;
/* ユーザのデフォルト表領域を設定 */
alter  user fta default tablespace USERS;
/* ユーザの一時表領域を設定 */
alter  user fta temporary tablespace TEMP;
/* ユーザのデフォルト表領域の利用制限を無制限に設定 */
alter user fta quota UNLIMITED on USERS;
/* ユーザにシステム権限を設定 */
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

/* httpポートを8081に設定. tomcatのデフォルトとの重複を回避 */
exec dbms_xdb.sethttpport(8081);
/* DBのパラメータ変更をあわせて実施 */
alter system set recyclebin=off deferred;
alter system set sec_case_sensitive_logon=false;
alter system set "_optim_peek_user_binds"=false;
alter system set "_optimizer_skip_scan_enabled"=false;
alter system set "_optimizer_table_expansion"=false;
alter system set "_optimizer_use_feedback"=false;
/* defaultプロファイルの変更 */
ALTER PROFILE DEFAULT LIMIT  PASSWORD_LIFE_TIME UNLIMITED;
ALTER PROFILE DEFAULT LIMIT  PASSWORD_LOCK_TIME UNLIMITED;
ALTER PROFILE DEFAULT LIMIT  PASSWORD_GRACE_TIME UNLIMITED;
ALTER PROFILE DEFAULT LIMIT  FAILED_LOGIN_ATTEMPTS UNLIMITED;
