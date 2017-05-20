package app;

import java.io.Serializable;

public class Task  implements Serializable {

	public Task(){

	}

	private String id;
	private String title;
	private String description;
	private String submit;
	private String status;
	private String limitYMD;
	private String registerYMD;
	private String updateYMD;
	private String completeYMD;
	private String deleteYMD;
	private String register;
	private String worker;


	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getSubmit() {
		return submit;
	}
	public void setSubmit(String submit) {
		this.submit = submit;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getLimitYMD() {
		return limitYMD;
	}
	public void setLimitYMD(String limitYMD) {
		this.limitYMD = limitYMD;
	}
	public String getRegisterYMD() {
		return registerYMD;
	}
	public void setRegisterYMD(String registerYMD) {
		this.registerYMD = registerYMD;
	}
	public String getUpdateYMD() {
		return updateYMD;
	}
	public void setUpdateYMD(String updateYMD) {
		this.updateYMD = updateYMD;
	}
	public String getCompleteYMD() {
		return completeYMD;
	}
	public void setCompleteYMD(String completeYMD) {
		this.completeYMD = completeYMD;
	}
	public String getDeleteYMD() {
		return deleteYMD;
	}
	public void setDeleteYMD(String deleteYMD) {
		this.deleteYMD = deleteYMD;
	}
	public String getRegister() {
		return register;
	}
	public void setRegister(String register) {
		this.register = register;
	}
	public String getWorker() {
		return worker;
	}
	public void setWorker(String worker) {
		this.worker = worker;
	}



}
