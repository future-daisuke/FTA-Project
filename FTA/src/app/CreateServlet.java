package app;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

public class CreateServlet extends HttpServlet{


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException {

		int id = 1;
		String title = request.getParameter("title");
		String des = request.getParameter("description");
		String submit = request.getParameter("submit");
		String limit = request.getParameter("limit");

		try (
				// データベースへ接続します
				Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "webapp", "webapp");

				// SQLの命令文を実行するための準備をおこないます
				PreparedStatement stmt = con.prepareStatement("insert into TR_TASK (id,title,description,submit,limit_ymd)  "+
						"values (seq_task.nextval, '" + title + "', '" + des + "', '" + submit + "', '" + limit + "');");

		) {
			stmt.executeUpdate();
			con.commit();
			PrintWriter w = response.getWriter();
			w.append(new ObjectMapper().writeValueAsString("success"));

		} catch (SQLException e) {
			throw new RuntimeException(e);
		} catch (IOException e) {
			// TODO 自動生成された catch ブロック
			e.printStackTrace();
		}
	}
}
