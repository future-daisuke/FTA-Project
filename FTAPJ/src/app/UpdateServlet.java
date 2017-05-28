package app;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import model.Task;

/**
 * Servlet implementation class UpdateServlet
 */
@WebServlet("/api/UpdateServlet")
public class UpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		//タスクID受け取り。リクエスト送信ver.
		//String id = request.getParameter("id");

		//DB接続準備
		String url = "jdbc:oracle:thin:@localhost:1521:XE";
		String user = "fta";
		String pass = "fta";


		try (
				// データベースへ接続します
				Connection con = DriverManager.getConnection(url, user, pass);

				// SQLの命令文を実行するための準備をおこないます
				Statement stmt = con.createStatement();

				ResultSet rs = stmt.executeQuery(
						"select * from TR_TASK T where 1=1 and T.ID = "+ 1//実際はid
						);

		) {
			Task task = new Task();
			if(rs.next()){
				task.setTitle(rs.getString("TITLE"));
				task.setDescription(rs.getString("DESCRIPTION"));
				task.setSubmit(rs.getString("SUBMIT"));
				task.setLimitYMD(rs.getString("LIMIT_YMD"));
			}


			// アクセスした人答するためのJSONを用意する
			PrintWriter pw = response.getWriter();
            //
			//// JSONで出力
			pw.append(new ObjectMapper().writeValueAsString(task));


		} catch (Exception e) {
			throw new RuntimeException(e);
		}

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			//タスクID受け取り。リクエスト送信ver.
			//String id = request.getParameter("id");

		//編集情報を取得
		String title = request.getParameter("title");
		String description = request.getParameter("description");
		String submit = request.getParameter("submit");
		String limit = request.getParameter("limit");

				//DB接続準備
				String url = "jdbc:oracle:thin:@localhost:1521:XE";
				String user = "fta";
				String pass = "fta";


				try (
						// データベースへ接続します
						Connection con = DriverManager.getConnection(url, user, pass);

						// SQLの命令文を実行するための準備をおこないます
						PreparedStatement stmt = con.prepareStatement(
									"update TR_TASK set "
									+ " TITLE = ?"
									+ ", DESCRIPTION = ?"
									+ ", SUBMIT = ?"
									+ ", LIMIT_YMD = ?"
									+ ", UPDATE_YMD = sysdate"
									+ " where ID = ?"
								);

				) {

					stmt.setString(1, title);
					stmt.setString(2, description);
					stmt.setString(3, submit);
					stmt.setString(4, limit);
					stmt.setString(5, "1");//実際はid


					stmt.executeQuery();
					con.commit();

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
