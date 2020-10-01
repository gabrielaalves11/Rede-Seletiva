package model;

public class User {
	
	int id;
	String email;
	String senha;
	
	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ", senha=" + senha + "]";
	}
	
	public User(int id, String email, String senha) {
		super();
		this.id = id;
		this.email = email;
		this.senha = senha;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
}
