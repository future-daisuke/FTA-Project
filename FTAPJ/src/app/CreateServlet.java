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
				Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "webapp", "webapp");

				// SQLの命令文を実行するための準備をおこないます
				PreparedStatement stmt = con.prepareStatement("insert into TR_TASK (id,title,description,submit,limit_ymd)  "+
						"values (seq_task.nextval, '" + title + "', '" + des + "', '" + submit + "', '" + limit + "')");

		) {
			System.out.println(stmt);
			stmt.executeUpdate();
			con.commit();
			//PrintWriter w = response.getWriter();
			//w.append("success");
			System.out.println("Servlet out");

			String responseJson = "{\"success\" : \"success\"}";
			response.setContentType("application/json;charset=UTF-8");
			PrintWriter out = response.getWriter();
			out.print(responseJson);

		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
