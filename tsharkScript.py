import subprocess

program='sudo tshark -a duration:10 -w serverMetrics.pcap'
subprocess.call(program, shell=True)

