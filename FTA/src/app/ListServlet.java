package app;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Servlet implementation class ListServlet
 */
@WebServlet("/ListServlet")
public class ListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public ListServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());

		// ブラウザから送信されたリクエストから社員番号とパスワードの情報を取得
				String id = request.getParameter("id");

				// データベースにアクセスするために、データベースのURLとユーザ名とパスワードを指定します
				String url = "jdbc:log4jdbc:oracle:thin:@localhost:1521:XE";
				String user= "";
				String pass= "";
				// SQLの命令文行するための準備をおこないます

				try (

						// 接続文字列は jdbc:postgresql://[ホスト名]:[ポート番号]/[データベース名]
						Connection con = DriverManager.getConnection(url, user, pass);

						Statement stmt = con.createStatement();

					    ResultSet rs = stmt.executeQuery(
					    	" "
					    );) {

					List<Task> list = new ArrayList<>();
					 while(rs.next()) {
						Task task = new Task();
						//task.set~~(rs.getString("~~"))
						 list.add(task);
						}


					// アクセスした人答するためのJSONを用意する
					PrintWriter pw = response.getWriter();
		            //
					//// JSONで出力
					pw.append(new ObjectMapper().writeValueAsString(list));
				} catch (Exception e) {
					throw new RuntimeException(String.format("検索処理の実施中にエラーが発生しました。詳細：[%s]", e.getMessage()), e);
			}

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
