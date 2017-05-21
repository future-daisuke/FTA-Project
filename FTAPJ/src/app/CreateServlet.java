package app;

import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;


@WebServlet("/api/CreateServlet")
public class CreateServlet extends HttpServlet{

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException {

		System.out.println("servlet in");
		String title = request.getParameter("title");
		String des = request.getParameter("description");
		String submit = request.getParameter("submit");
		String limit = request.getParameter("limit");

		try (
				// データベースへ接続します
				Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "fta", "fta");

				// SQLの命令文を実行するための準備をおこないます
				PreparedStatement stmt = con.prepareStatement("insert into TR_TASK (id,title,description,submit,limit_ymd)  "+
						"values (seq_task.nextval, ?, ?, ?, ?)");

		) {
			stmt.setString(1, title);
			stmt.setString(2, des);
			stmt.setString(3, submit);
			stmt.setString(4, limit);
			stmt.executeUpdate();
			con.commit();
			System.out.println("Servlet out");


			// アクセスした人答するためのJSONを用意する
			PrintWriter pw = response.getWriter();
            //
			//// JSONで出力
			pw.append(new ObjectMapper().writeValueAsString("success"));


		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
