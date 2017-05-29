package app;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/api/CompleteServlet")
public class CompleteServlet extends HttpServlet{
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException {
		System.out.println("post servlet in");
		String taskId = request.getParameter("ID");
		String status = request.getParameter("status");
		Date date = new Date();
		int st = Integer.parseInt(status);
		//セッションの取得
//		HttpSession session = request.getSession(true);
//		session.setAttribute("comId", taskId);
		String sql;
		if(st == 2){
			sql = "update TR_TASK set status_kbn = '1' ,complete_ymd = "+  date +" where ID = '"+ taskId +"'";
		}else{
			sql = "update TR_TASK set status_kbn = '2' ,complete_ymd = "+  date +" where ID = '"+ taskId +"'";
		}
		try(
			Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "fta", "fta");
			// SQLの命令文を実行するための準備をおこないます
			PreparedStatement stmt = con.prepareStatement(sql);
		){
			stmt.executeUpdate();
			con.commit();

			PrintWriter w = response.getWriter();
			w.write(new ObjectMapper().writeValueAsString("success"));
		} catch (SQLException e) {
			// TODO 自動生成された catch ブロック
			e.printStackTrace();
		} catch (IOException e) {
			// TODO 自動生成された catch ブロック
			e.printStackTrace();
		}
	}
}
