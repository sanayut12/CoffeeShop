﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace สมัครสมาชิก
{
    public partial class Form6 : Form
    {
        // connect Database 
        MySqlConnection connection = new MySqlConnection("host=localhost;user=root;password=12345678;database=final");
        MySqlCommand command;

        public Form6(int id)
        {
            InitializeComponent();
            loadMenu(id);

            this.Text = id.ToString();
        }

        private void loadMenu(int ids)
        {




            string QueryMenu = "SELECT * FROM products WHERE ProductID = "+ids;
            connection.Open();
            command = new MySqlCommand(QueryMenu, connection);
            MySqlDataReader reader = command.ExecuteReader();

            while (reader.Read())
            {
                string url = reader.GetString("Url");
                WebRequest request = WebRequest.Create(url);
                using (var response = request.GetResponse())
                {
                    using (var str = response.GetResponseStream())
                    {
                        image_box.Image = Bitmap.FromStream(str);
                    }
                }
                textBox_url.Text = url;
                textBox_name.Text = reader.GetString("ProductName");
                comboBox_type.Text = reader.GetString("Type");
                textBox_cost.Text = reader.GetString("Price");
                comboBox_status.Text = reader.GetString("Status");

            }
            connection.Close();
        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            int productID = int.Parse(this.Text);
            string productName = textBox_name.Text;
            string price = textBox_cost.Text;
            string type = comboBox_type.Text;
            string url = textBox_url.Text;
            string status = comboBox_status.Text;

            string QueryUpdateMenu = "UPDATE products SET ProductName = '"+productName+ "',Price = '"+price+ "',Type = '"+type+ "',Url='"+url+ "',Status = '"+status+ "'    WHERE ProductID = " + productID;
            connection.Open();
            command = new MySqlCommand(QueryUpdateMenu, connection);
            MySqlDataReader reader = command.ExecuteReader();


            connection.Close();
            MessageBox.Show("Update ProductID = "+productID);
        }
    }
}
