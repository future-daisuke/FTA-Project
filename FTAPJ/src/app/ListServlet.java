package app;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



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


				// データベースにアクセスするために、データベースのURLとユーザ名とパスワードを指定します
				String url = "jdbc:log4jdbc:oracle:thin:@localhost:1521:XE";
				String user= "fta";
				String pass= "fta";
				// SQLの命令文行するための準備をおこないます

				try (

						// 接続文字列は jdbc:postgresql://[ホスト名]:[ポート番号]/[データベース名]
						Connection con = DriverManager.getConnection(url, user, pass);

						Statement stmt = con.createStatement();

					    ResultSet rs = stmt.executeQuery(
					    	" select T.ID, T.TITLE, T.DESCRIPTION, T.SUBMIT, K.KBN_VALUE STATUS, T.LIMIT_YMD, T.REGISTER_YMD, T.UPDATE_YMD, T.COMPLETE_YMD, T.DELETE_YMD, T.REGISTER_ID, T.WORKER_ID " //register, workerは名前で表示したい
					    	+ " from TR_TASK T, MS_KBN K"
					    	+ " where 1=1 and K.KBN_CD = '1' and K.KBN = T.STATUS_KBN"
					    	+ "order by T.limit_ymd"
					    );) {

					List<Task> list = new ArrayList<>();
					 while(rs.next()) {
						Task task = new Task();
						task.setId(rs.getString("id"));
						task.setTitle(rs.getString("title"));
						task.setDescription(rs.getString("description"));
						task.setSubmit(rs.getString("submit"));
						task.setStatus(rs.getString("status"));
						task.setLimitYMD(rs.getString("limit_YMD"));
						task.setRegisterYMD(rs.getString("register_YMD"));
						task.setCompleteYMD(rs.getString("complete_ymd"));
						task.setDeleteYMD(rs.getString("delete_ymd"));
						task.setRegister(rs.getString("register_id"));
						task.setWorker(rs.getString("worker_id"));
						 list.add(task);
						}

			//		//sessionにtaskListをセット
			//			HttpSession session = request.getSession(true);
			//			session.setAttribute("taskList", list);
			//			/*
			//			 * 別画面で呼び出す場合は、
			//			 * HttpSession session = request.getSession(true);
			//			 * session.getAttribute("taskList");
			//			 * を使ってください
			//			 */


					 // JSPへ転送用するため、リクエストパラメータに追加します
						request.setAttribute("list", list);

						// JSPへの遷移先を設定
						RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/index.jsp");

						// JSPページを処理をフォワード
						dispatcher.forward(request, response);



				} catch (Exception e) {
					throw new RuntimeException(String.format("検索処理の実施中にエラーが発生しました。詳細：[%s]", e.getMessage()), e);
			}

	}

	//タスク完了のupdate
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		//完了を押されたタスクのidを取得
		String id = request.getParameter("id");


		// データベースにアクセスするために、データベースのURLとユーザ名とパスワードを指定します
				String url = "jdbc:log4jdbc:oracle:thin:@localhost:1521:XE";
				String user= "fta";
				String pass= "fta";
				// SQLの命令文行するための準備をおこないます

				try (

						// 接続文字列は jdbc:postgresql://[ホスト名]:[ポート番号]/[データベース名]
						Connection con = DriverManager.getConnection(url, user, pass);


				        PreparedStatement pstmt = con.prepareStatement("update TR_TASK"+
					    			" set STATUS_KBN = 1 "+
					    			" where id = ?"); ){

				        pstmt.setString(1, id);

				        pstmt.executeUpdate();
						con.commit();

				} catch (Exception e) {
					throw new RuntimeException(String.format("検索処理の実施中にエラーが発生しました。詳細：[%s]", e.getMessage()), e);
				}

	}

}
