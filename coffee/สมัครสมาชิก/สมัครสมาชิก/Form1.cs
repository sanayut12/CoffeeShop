using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace สมัครสมาชิก
{
    public partial class Form1 : Form
    {
        // connect Database 
        MySqlConnection connection = new MySqlConnection("host=localhost;user=root;password=12345678;database=final");
        MySqlCommand command;

        public Form1()
        {
            InitializeComponent();

        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {
 

        }

        private void pictureBox4_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Form2 f2 = new Form2();
            f2.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            string loginQuery = "SELECT StaffID,StaffName,StaffPassword,StaffLevel FROM staffs WHERE StaffName ='" + textBox_name.Text + "'AND StaffPassword = '" + textBox_pass.Text + "'";
            connection.Open();
            command = new MySqlCommand(loginQuery, connection);
            MySqlDataReader reader = command.ExecuteReader();

            int x = 0;
            while (reader.Read())
            {
                if (reader.GetString("StaffName") == textBox_name.Text && reader.GetString("StaffPassword") == textBox_pass.Text)
                {
                    string ID = reader.GetString("StaffID");
                    string Level = reader.GetString("StaffLevel");

                    MessageBox.Show(" correct");
                    x = 1;
                    Form8 f8 = new Form8(ID,Level);
                    f8.Show();
                    this.Hide();
                }
            }
            if (x == 0)
            {
                MessageBox.Show("Username or Password not correct");
            }


            connection.Close();


/*
            Form7 f7 = new Form7();
            f7.Show();*/
        }

        private void Form1_Click(object sender, EventArgs e)
        {

        }

        private void checkBox1_Click(object sender, EventArgs e)
        {
            
        }

        private void checkBox1_CheckedChanged(object sender, EventArgs e)
        {
            if(checkBox1.Checked )
            {
                textBox_pass.UseSystemPasswordChar = false;
            }
            else
            {
                textBox_pass.UseSystemPasswordChar= true;
            }
        }

        private void button2_MouseEnter(object sender, EventArgs e)
        {
            button2.BackColor = Color.Tan;
        }

        private void button2_MouseLeave(object sender, EventArgs e)
        {
            button2.BackColor = Color.White;
        }
    }
}
