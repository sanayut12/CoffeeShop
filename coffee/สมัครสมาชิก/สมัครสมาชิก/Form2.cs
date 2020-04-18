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
    public partial class Form2 : Form
    {
        MySqlConnection connection = new MySqlConnection("host=localhost;user=root;password=12345678;database=final");
        MySqlCommand command;


        public Form2()
        {
            InitializeComponent();
        }

        private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void listBox2_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            int id = 1;

            connection.Open();

            string insertQuery = "INSERT INTO staffs(StaffName,Gender,StaffPassword,StaffLevel) VALUE(@StaffName,@Gender,@StaffPassword,@StaffLevel)";
            command = new MySqlCommand(insertQuery, connection);

            //@StaffName,@Gender,@StaffPassword,@StaffLevel
            command.Parameters.Add("@StaffName", MySqlDbType.VarChar, 100);
            command.Parameters.Add("@Gender", MySqlDbType.VarChar, 100);
            command.Parameters.Add("@StaffPassword", MySqlDbType.VarChar, 100);
            //'Staff','Manager','Admin'
            command.Parameters.Add("@StaffLevel", MySqlDbType.VarChar, 100);
 
            command.Parameters["@StaffName"].Value = textBox_name.Text;
            command.Parameters["@Gender"].Value = textBox_gender.Text;
            command.Parameters["@StaffPassword"].Value = textBox_password.Text;
            command.Parameters["@StaffLevel"].Value = textBox_level.Text;

            
            if (command.ExecuteNonQuery() == 1)
            {
                MessageBox.Show("register success!");
            }
            else
            {
                MessageBox.Show("register not success!");
            }
            connection.Close();


        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            Form1 f1 = new Form1();
            f1.Show();
            this.Hide();
        }
    }
}
