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
    public partial class Form7 : Form
    {
        MySqlConnection connection = new MySqlConnection("host=localhost;user=root;password=12345678;database=final");
        MySqlCommand command;

        public Form7()
        {
            InitializeComponent();
        }

        private void Form7_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            connection.Open();

            string insertQuery = "INSERT INTO products(ProductName,Price,Type,Url) VALUE(@ProductName,@Price,@Type,@Url)";
            command = new MySqlCommand(insertQuery, connection);

            command.Parameters.Add("@ProductName", MySqlDbType.VarChar, 100);
            command.Parameters.Add("@Price", MySqlDbType.VarChar, 100);
            command.Parameters.Add("@Type", MySqlDbType.VarChar, 100);
            command.Parameters.Add("@Url", MySqlDbType.VarChar, 500);

            command.Parameters["@ProductName"].Value = textBox_name.Text;
            command.Parameters["@Price"].Value = textBox_price.Text;
            command.Parameters["@Type"].Value = comboBox_type.Text;
            command.Parameters["@Url"].Value = textBox_url.Text;


            if (command.ExecuteNonQuery() == 1)
            {
                MessageBox.Show("Add menu success!");
            }
            else
            {
                MessageBox.Show("Add menu unsuccess!");
            }
            connection.Close();
        }
    }
}
